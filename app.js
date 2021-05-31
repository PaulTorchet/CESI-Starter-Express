const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URI =
  'mongodb+srv://UdemyUser:UdemyPassword@cluster0.ebwgy.mongodb.net/starter-cesi?retryWrites=true&w=majority';

const todoRouter = require('./routes/todo');

const app = express();

app.use(express.json());

app.use(todoRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connecté à MongoDB w/ Mongoose');
    app.listen(8080);
  })
  .catch(err => {
    console.log(error);
  });
