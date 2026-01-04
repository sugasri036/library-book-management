# Library Book Management System

## Objective
To build a Library Book Management system using Node.js, Express, and MongoDB that supports CRUD operations with proper schema design and error handling.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API testing)

---

## Database Details
- Database Name: libraryDB
- Collection Name: books

---

## Book Schema
| Field | Type |
|------|------|
| title | String |
| author | String |
| category | String (technology / education / scifi) |
| publishedYear | Number |
| availableCopies | Number |

---

## API Endpoints

### Insert Book
**POST** `/books`

### Insert Multiple Books
**POST** `/books/many`

### Get All Books
**GET** `/books`

### Get Books by Category
**GET** `/books/category/:category`

### Get Books Published After 2019
**GET** `/books/after/2019`

### Update Available Copies
**PUT** `/books/copies/:id`
```json
{
  "change": 1
}

Delete Book if Copies = 0

DELETE /books/:id

Error Handling

Book not found

Invalid update request

Cannot delete book if copies are still available

How to Run the Project
npm install
node server.js


Server runs at:

http://localhost:3000

Author

Sugasri Muraleedharan



