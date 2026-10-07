# 📚 BookStore API

A simple RESTful CRUD BookStore API built using Node.js, Express.js, MongoDB, Mongoose, and Multer.

This project allows users to create, read, update, and delete book records with image upload functionality.

## 📸 Project Screenshot
<img width="1370" height="872" alt="Screenshot 2026-10-07 101349" src="https://github.com/user-attachments/assets/7d79d672-f094-44f3-b8ae-cfe1fe8e73ca" />
<img width="1475" height="894" alt="Screenshot 2026-10-07 101359" src="https://github.com/user-attachments/assets/358e1a85-3ae8-435e-a620-b319c8d533da" />
<img width="1472" height="841" alt="Screenshot 2026-10-07 101458" src="https://github.com/user-attachments/assets/613ac1ce-cc16-457a-8b23-d46a68076e28" />



## 🔗 Run / View Project

<a href="https://bookstore-api-svt6.onrender.com/" target="_blank">🚀 View Live Project</a>


## 🔗 Video

<a href="https://drive.google.com/file/d/1M2PdqyF6g5mqEjsGjsjrYaBpQcuFkWml/view?usp=drivesdk" target="_blank">Drive Link</a

## ✨ Features

* ➕ Add New Book
* 👀 View All Books
* ✏️ Update Book Details
* 🗑️ Delete Book
* 🖼️ Upload Book Images
* 📋 Display Book Data
* 🗄️ Store Data in MongoDB
* 🔄 Complete CRUD Operations
* ⚡ Express.js Server
* 📦 Mongoose Database Management
* 🔐 Environment Variables using dotenv
* 🛡️ Centralized Error Handling
* 📁 Multiple Image Upload Support

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* dotenv
* JavaScript
* Postman

## 📚 CRUD Operations

### 1. Create

Add a new book with:

* Title
* Author
* ISBN
* Price
* Book Image

Multiple images can be uploaded while creating a book.

### 2. Read

Fetch all books from MongoDB and return the book data through the API.

### 3. Update

Update an existing book's:

* Title
* Author
* ISBN
* Price

### 4. Delete

Remove an existing book from the MongoDB database.

## 📁 Project Structure

```text
BookStore API/
│
├── config/
│   └── db.js
│
├── controller/
│   └── Book.controller.js
│
├── middleware/
│   ├── httpError.js
│   └── upload.js
│
├── model/
│   └── BookSchema.js
│
├── routes/
│   └── Book.routes.js
│
├── uploads/
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to Project Folder

```bash
cd BookStore-API
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/bookstore
```

### 5. Create Uploads Folder

Create an `uploads` folder in the project root:

```text
uploads/
```

This folder is used to store uploaded book images.

### 6. Start the Server

```bash
npm start
```

### 7. Development Mode

```bash
npm run dev
```

### 8. Open in Browser

```text
http://localhost:5001
```

## 🗄️ Database

This project uses MongoDB to store book information.

Each book contains:

* Title
* Author
* ISBN
* Price
* Image

### Book Schema

```js
{
  title: String,
  author: String,
  ISBN: String,
  price: String,
  image: [String]
}
```

## 🖼️ Image Upload

Book images are uploaded using Multer.

Supported image formats:

* JPG / JPEG
* PNG

Maximum file size:

```text
5 MB
```

Maximum images during book creation:

```text
5 images
```

Images are stored inside:

```text
uploads/
```

## 🔄 Application Flow

```text
Postman
   ↓
Express.js Route
   ↓
Book Controller
   ↓
Mongoose
   ↓
MongoDB
   ↓
Database Operation
   ↓
API Response
```

For image upload:

```text
Postman
   ↓
Multer
   ↓
uploads/
   ↓
Book Controller
   ↓
MongoDB
```

## 🌐 API Routes

| Method | Route                | Purpose           |
| ------ | -------------------- | ----------------- |
| POST   | `/books/Create`      | Create a new book |
| POST   | `/books/getAllBooks` | Get all books     |
| PUT    | `/books/Update/:id`  | Update a book     |
| DELETE | `/books/Delete/:id`  | Delete a book     |

## 🧪 Postman Testing

### Create Book

**Method:**

```text
POST
```

**URL:**

```text
http://localhost:5001/books/Create
```

**Body:**

```text
form-data
```

Fields:

```text
title   → Text
author  → Text
ISBN    → Text
price   → Text
image   → File
```

---

### Get All Books

**Method:**

```text
POST
```

**URL:**

```text
http://localhost:5001/books/getAllBooks
```

No body is required.

---

### Update Book

**Method:**

```text
PUT
```

**URL:**

```text
http://localhost:5001/books/Update/BOOK_ID
```

**Body:**

```text
raw → JSON
```

Example:

```json
{
  "title": "Atomic Habits Updated",
  "author": "James Clear",
  "ISBN": "9780735211292",
  "price": "699"
}
```

---

### Delete Book

**Method:**

```text
DELETE
```

**URL:**

```text
http://localhost:5001/books/Delete/BOOK_ID
```

No body is required.

## 📦 Dependencies

* express
* mongoose
* multer
* dotenv

## 🎯 Learning Concepts

* Node.js Server
* Express.js Routing
* REST API
* MongoDB Connection
* Mongoose Schema & Model
* CRUD Operations
* Controller Structure
* Middleware
* Multer File Upload
* Image Handling
* Environment Variables
* Error Handling
* HTTP Methods
* Postman API Testing
* Database Operations

## 👨‍💻 Author

Mitrajsinh Jadeja

## 📌 Note

This project was created for learning and practicing:

Node.js + Express.js + MongoDB + Mongoose + Multer + REST API + CRUD Operations
