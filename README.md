# Overview
Shoppy Globe is a fully responsive e-commerce web application that provides users with a seamless and delightful shopping experience. In this project, built the backend API using Node.js, Express, and MongoDB. It provides functionalities for user authentication, product management, and shopping cart operations.

# Features
**User Authentication**: Register and login users with JWT authentication.

**Product Management**: CRUD operations for products.

**Shopping Cart Management**: Add, update, and remove products from the cart.

**Secure Routes**: Protect cart routes using JWT-based authentication.

# Technologies Used
* Node.js
* Express.js
* MongoDB & Mongoose
* JSON Web Token (JWT)
* bcrypt.js
* dotenv

# Installation

**Prerequisites**
Ensure you have Node.js and MongoDB installed.

**Steps** 

1. Clone the repository:
    * git clone https://github.com/Charu-30/ShoppyGlobeAPI_backend.git

2. Navigate to the project directory:
    * cd NodeJS

3. Install dependencies:
    * npm install

4. Set up environment variables in a .env file:
    * MONGO_URI=your_mongodb_connection_string
    * JWT_SECRET=your_secret_key
    * PORT=6000

5. Start the server:
    * npm start


# API Endpoints

* Authentication
**POST /register** - Register a new user
  
**POST /login** - Login and receive a JWT token

* Products
**GET /products** - Fetch all products
  
**POST /products** - Add a new product

**PUT /products/:id** - Update product details

**DELETE /products/:id** - Delete a product

* Cart (Protected Routes - Requires JWT Token)
**POST /cart** - Add a product to the cart
  
**PUT /cart/:id** - Update product quantity

**DELETE /cart/:id** - Remove a product from the cart

# Testing
Use Thunder Client for API Testing

* Authentication
1. Register a new user with /register

2. Login with /login to receive a JWT token

3. Add Authorization header(JWT <token>) for protected routes.

# Screenshots
All testing screenshots are provided in the word document below:

[ShoppyGlobe APIs Endpoints.docx](https://github.com/user-attachments/files/18675941/ShoppyGlobe.APIs.Endpoints.docx)

# Contributing
Feel free to fork this repository, make changes, and submit a pull request. Suggestions and improvements are welcome!

# Contact
* **Developer**: Charu Mangla
* **GitHub**: https://github.com/Charu-30
* **Email**: charumangla432@gmail.com
