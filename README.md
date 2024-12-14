# Library Management System Backend
  This project provides the backend functionality for a Library Management System. It allows users (Readers and Authors) to manage books, borrow 
  and return books, and perform user management tasks like signup, login, and account updates.

## Project Overview
The Library Management System Backend is built using Node.js and Express.js with MongoDB as the database. The system allows:

- **User Management**: Readers and Authors can sign up, log in, update their profiles, and manage their account details.
- **Book Management**: Authors can add, update, and remove books. Readers can view, search, and borrow books.
- **Borrowing & Returning:** Readers can borrow up to 5 books and return them, updating the book stock accordingly.
- **Session Management:** Implemented "Remember Me" functionality with JWT-based session management.
 
# Features
  
## User Management
 - **Users can sign up as Readers or Authors.**
 - **Readers can borrow books, and Authors can manage books they have written.**
 - **The "Remember Me" functionality keeps users logged in for 15 days using session tokens.**
  
## CRUD Operations for Books
  -  Authors can create, read, update, and delete books.
  -  Readers can search for books by title, genre, or author and view all books in the library.
  
## Borrowing & Returning Books
  - Readers can borrow up to 5 books at a time.
  - Borrowing reduces the book's stock by 1, and returning it increases the stock by 1.
  
## API Endpoints
  - **User Operations:** Register, login, update, delete, and validate session.
  - **Book Operations:** Add, update, delete, view, search, borrow, and return books.
  
## Technologies Used
  - **Node.js with Express.js**: Backend framework for API development.
  - **MongoDB:** Database for storing user and book data.
  - **JWT (JSON Web Tokens):** For authentication and session management.
  - **Bcryptjs:** For password hashing.
  - **dotenv:** For managing environment variables.
  
## Setup and Installation
  - **Prerequisites**
    - Node.js and npm installed.
    - A MongoDB account or local instance for database storage.
    
# API Endpoints
 ## User Routes
   - **POST /users/signup:** Register a new user (Reader or Author).
   -  ![Sign Up](https://github.com/RamDesai28/library_backend/blob/d3f0fb1da0c83f8b6c11c796b5c1388ab817d9c3/Screenshot%202024-12-14%20192720.png)
   - **POST /users/login:** Authenticate user and return a session token.
   - ![Sign Up](https://github.com/RamDesai28/library_backend/blob/d3f0fb1da0c83f8b6c11c796b5c1388ab817d9c3/Screenshot%202024-12-14%20192720.png)
   - **PUT /users/update/:id:** Update user details (name, password).
   - **DELETE /users/delete/:id:** Delete a user account.
   - **GET /users/session/validate:** Validate the session token.
   - 
   
## Book Routes
   - **POST /books/create:** Add a new book (Authors only).
   - **GET /books:** Retrieve a list of all books or search by title, genre, or author.
   - **GET /books/author/:id:** Retrieve books by a specific author.
   - **PUT /books/update/:id:** Update book details (Authors only).
   - **DELETE /books/delete/:id:** Delete a book (Authors only).
   - **POST /reader/books/borrow:** Borrow a book (Readers only).
   - **POST /reader/books/return:** Return a borrowed book (Readers only).
   - **GET /reader/books/:id:** View all borrowed books by a Reader.
   -  ![Book API Resp](https://github.com/RamDesai28/library_backend/blob/64904d35cd1fb65bf8f43aff06bded5d56a15708/Screenshot%202024-12-14%20181935.png)
   
# Example Usage
 ## Author Use Case:
   - Sign up as an author.
   - Login to the system.
   - Add a new book: Title: "Node.js Basics", Genre: "Programming", Stock: 10.
   - View books added by the author.
 ## Reader Use Case:
   - Sign up as a reader.
   - Login to the system.
   - Search for a book by title or genre.
   - Borrow a book if in stock.
   - Return a borrowed book once finished.
  
## Contribution
 - Feel free to fork this project and contribute! Open issues or pull requests for improvements or additional features.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
