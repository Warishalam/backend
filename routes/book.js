const express = require('express');
const { addBook, searchBook, addBookToBookList } = require('../controllers/book');
const bookRouter = express.Router();

bookRouter.post('/addBook', addBook);
bookRouter.get('/searchBook', searchBook);  
bookRouter.post('/addBookToBookList/:bookId', addBookToBookList);

module.exports = {bookRouter};