const express = require('express');

const Todo = require('../models/todo');

const router = express.Router();

// GET /todo
router.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).send({ todos });
  } catch (error) {
    console.log(error);
  }
});

// GET /todo/:todoId
router.get('/todo/:todoId', async (req, res) => {
  const todoId = req.params.todoId;

  try {
    const todo = await Todo.findById(todoId);

    res.status(200).send({ todo });
  } catch (error) {
    console.log(error);
  }
});

// POST /todo
router.post('/todo', async (req, res) => {
  const newTodo = Todo({ title: req.body.title });

  try {
    const savedTodo = await newTodo.save();

    res.status(201).send({ todo: savedTodo });
  } catch (error) {
    console.log(error);
  }
});

// PUT /todo/:todoId
router.put('/todo/:todoId', async (req, res) => {
  const todoId = req.params.todoId;

  try {
    const todo = await Todo.findById(todoId);

    todo.title = req.body.title;

    const savedTodo = await todo.save();

    res.status(200).send({ todo: savedTodo });
  } catch (error) {
    console.log(error);
  }
});

// DELETE /todo/:todoId
router.delete('/todo/:todoId', async (req, res) => {
  const todoId = req.params.todoId;

  try {
    await Todo.findByIdAndRemove(todoId);

    res.status(200).send({ message: 'Deleted !' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
