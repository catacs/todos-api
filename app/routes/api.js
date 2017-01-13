'use strict';

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

// Todos api
router.get('/todos', todoController.findAll);
router.get('/todos/:id', todoController.find);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.remove);

module.exports = router;
