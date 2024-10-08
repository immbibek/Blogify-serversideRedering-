﻿# Blogify-User Authentication System


 ## Overview

 This project is a simple User Authentication System built with Node.js, Express, MongoDB, and Mongoose. The application allows users to sign up, sign in, and stores user details securely with hashed passwords. The authentication system includes basic password hashing and salting mechanisms to enhance security.

## Table of Contents
- Technologies Used
- Features
- Installation
- Project Structure
- How it Works
- Usage

## Technologies Used
- Node.js: JavaScript runtime environment used to build the server-side application.
- Express: Web framework for Node.js that simplifies route handling and middleware integration.
- MongoDB: NoSQL database used to store user data.
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- EJS: Embedded JavaScript templates used for rendering dynamic HTML content.
- Crypto Module: Built-in Node.js library for hashing and salting passwords.

## Features 
- User Sign-up: New users can register by providing their full name, email, and password.
- User Sign-in: Registered users can log in with their credentials.
- Password Hashing: Passwords are securely hashed and salted before storing in the database.
- Role Management: Basic user roles (USER, ADMIN) are defined.
- Responsive Views: Forms for sign-in and sign-up are built using EJS and Bootstrap.

## Installation
To run this project locally, follow these steps:
## Prerequisites
- Ensure that Node.js and MongoDB are installed on your machine.
- Install MongoDB and run the MongoDB server locally.
## Steps:
1. Clone the repository:
 ```javascript

git clone https://github.com/your-username/blogify-authentication-system.git

cd blogify-authentication-system

```

2.Install dependencies:
 ```javascript

npm install


```
3. Start MongoDB locally:
   
```javascript

mongodb


```
4.Run the application
```javascript

npm run dev


```
5.open your browser and navigate to: http://localhost:8000 to access the app

## Project Structure
```bash
 ├── models/
│   └── user.js         # Mongoose schema and user model with password hashing
├── routes/
│   └── user.js         # Express route handling for sign-up and sign-in
├── views/
│   ├── signup.ejs      # Sign-up page
│   ├── signin.ejs      # Sign-in page
│   ├── home.ejs        # Homepage
│   └── partials/
│       └── nav.ejs     # Navigation bar
├── index.js            # Main entry point of the application
└── package.json        # Project metadata and dependencies

```

## How it Works
### Sign up Process
1. Form Submission: The user submits the sign-up form with fullName, email, and password.
2. password Hashing:
   - Before saving to the database, the password is hashed using a combination of a random salt and the SHA-256 algorithm.
   - The hashed password and salt are stored in the database.
3. Redirect: Upon successful registration, the user is redirected to the homepage.

### sin-in Process
1. Form Submission: The user submits the sign-in form with email and password.
2. Password Matching:
  - The system retrieves the stored salt and hashed password from the database.
  - It hashes the user-provided password with the same salt and compares it to the stored hash.
  - If they match, the user is authenticated.
3.Redirect: The user is redirected to the homepage upon successful login.
Password Security

## Usage
### User Sign-up:
1. Navigate to /user/signup.
2. Fill in the required details (Full Name, Email, Password) and click Submit.
3. The data is sent to the server, the password is hashed, and the user is created in the database.

## User Sign-in:
1. Navigate to /user/signin.
2. Enter your registered email and password.
3. If the credentials are valid, the user is logged in.
   
