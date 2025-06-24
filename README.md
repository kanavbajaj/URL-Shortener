# URL Shortener

A simple and clean URL shortener application built with Node.js, Express, and MongoDB. This project provides a user-friendly interface to create short URLs and track the number of clicks they receive.

**Live Demo:** [Link to your deployed Vercel app]

## Features

- **URL Shortening:** Convert long URLs into concise, easy-to-share links.
- **Click Tracking:** Automatically counts the number of times a shortened link is used.
- **Real-time UI Updates:**
  - The click count updates instantly on the page without requiring a reload.
  - A smooth animation provides feedback when a new URL is successfully shortened.
- **Copy to Clipboard:** Easily copy a shortened URL with a single click.
- **Modern Interface:** A clean and responsive UI built with Bootstrap 5.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Templating Engine:** EJS (Embedded JavaScript)
- **Frontend:** HTML, CSS, Bootstrap 5, Vanilla JavaScript
- **Deployment:** Vercel

## Local Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kanavbajaj/URL-Shortener.git
    cd URL-Shortener
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the root directory and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Start the development server:**
    ```bash
    npm run devStart
    ```
    The application will be available at `http://localhost:5000`.

## Deployment

This project is configured for easy deployment on [Vercel](https://vercel.com/).

To deploy, import your GitHub repository to Vercel and add the `MONGO_URI` as an environment variable in your project settings. Vercel will handle the rest.

### API Endpoints
* **POST /shortUrls**
  * Request body:
    ```json
    {
      "fullUrl": "https://www.example.com/long-url"
    }
    ```
  * Response:
    ```json
    {
      "short": "http://localhost:your_port_number/shortened-url"
    }
    ```
* **GET /:shortUrl**
  * Redirects to the original URL.

### Database Structure
The MongoDB database will contain a collection with the following schema:
```json
{
  "full": "https://www.example.com/long-url",
  "short": "shortened-url",
  "clicks": "Number Of Clicks"
}
```

### Contributing
Contributions are welcome! Please open an issue or pull request if you have any improvements or new features.




 

