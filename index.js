const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const { userRouter } = require("./routes/user");
const { bookRouter } = require("./routes/book");
const { connectMongoDB } = require("./models/connection");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
app.use(userRouter);
app.use(bookRouter);

connectMongoDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port number ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
