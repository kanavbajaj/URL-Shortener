
## URL Shortener

### Overview
This project is a URL shortener built using Node.js, Express.js, and MongoDB. It allows users to shorten long URLs into concise links for easy sharing.

### Prerequisites
* Node.js and npm (or yarn)
* MongoDB
* A code editor

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kanavbajaj/URL-Shortener.git
   ```
2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```
3. Install dependencies:
   ```bash
   npm install
   ```



### Running the Application
1. Start the MongoDB server.
2. Run the application:
   ```bash
   npm start
   ```
The application will be accessible at `http://localhost:your_port_number`.

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




 

