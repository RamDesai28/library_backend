Library Management System Backend
This project provides the backend functionality for a Library Management System. It allows users (Readers and Authors) to manage books, borrow and return books, and perform user management tasks like signup, login, and account updates.

Project Overview
The Library Management System Backend is built using Node.js and Express.js with MongoDB as the database. The system allows:

User Management: Readers and Authors can sign up, log in, update their profiles, and manage their account details.
Book Management: Authors can add, update, and remove books. Readers can view, search, and borrow books.
Borrowing & Returning: Readers can borrow up to 5 books and return them, updating the book stock accordingly.
Session Management: Implemented "Remember Me" functionality with JWT-based session management.
Features
User Management
Users can sign up as Readers or Authors.
Readers can borrow books, and Authors can manage books they have written.
The "Remember Me" functionality keeps users logged in for 15 days using session tokens.
CRUD Operations for Books
Authors can create, read, update, and delete books.
Readers can search for books by title, genre, or author and view all books in the library.
Borrowing & Returning Books
Readers can borrow up to 5 books at a time.
Borrowing reduces the book's stock by 1, and returning it increases the stock by 1.
API Endpoints
User Operations: Register, login, update, delete, and validate session.
Book Operations: Add, update, delete, view, search, borrow, and return books.
Technologies Used
Node.js with Express.js: Backend framework for API development.
MongoDB: Database for storing user and book data.
JWT (JSON Web Tokens): For authentication and session management.
Bcryptjs: For password hashing.
dotenv: For managing environment variables.
Setup and Installation
Prerequisites
Node.js and npm installed.
A MongoDB account or local instance for database storage.
