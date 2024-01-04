    models/userModel.js: Defines the MongoDB schema and model for user data.
    controllers/userController.js: Implements user-related functionality, including rendering views and handling user registration, login, and authentication.
    views/index.ejs: Home page view.
    views/login.ejs: Login page view.
    views/registration.ejs: Registration page view.
    app.js: Main application file.
    node_modules/: Directory containing Node.js modules (not included in the repository).
    package.json: Node.js project configuration file.
    README.md: Documentation file for the project.

Dependencies

    mongoose: MongoDB object modeling tool.
    bcrypt: Library for hashing passwords.

Usage

    Install dependencies by running:

    bash

npm install

Start the application:

bash

    node app.js

    Access the application in a web browser:
        Home: http://localhost:3000
        Login: http://localhost:3000/login
        Registration: http://localhost:3000/registration

User Registration

Visit the registration page (http://localhost:3000/registration) to create a new user account. The entered information will be stored securely in the MongoDB database.
User Login

Access the login page (http://localhost:3000/login) to enter your credentials. Upon successful login, you will be redirected to a dashboard page.
Dashboard

A simple dashboard view is displayed upon successful login, indicating a successful authentication process.
Important Note

    This is a basic example and should not be used in a production environment without additional security measures.
    Always handle sensitive information securely and follow best practices for user authentication.

Feel free to customize and extend this project based on your requirements!
