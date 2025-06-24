const express = require('express')
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

if (!process.env.MONGO_URI) {
  throw new Error('MONGO_URI is not defined in the environment variables');
}

const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

app.post('/api/increment-click', async (req, res) => {
  const { short } = req.body
  const shortUrl = await ShortUrl.findOne({ short: short })
  if (shortUrl) {
    shortUrl.clicks++
    await shortUrl.save()
    res.json({ clicks: shortUrl.clicks })
  } else {
    res.sendStatus(404)
  }
})

app.listen(process.env.PORT || 5000);