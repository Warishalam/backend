const express = require('express');

const { createUser, loginUser, getUser, getBookList } = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/createUser', createUser);
userRouter.post('/loginUser', loginUser);
userRouter.get('/getUser', getUser);
userRouter.get('/getBookList', getBookList);

module.exports = {userRouter};