'use strict';

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const itemsController = require('../controllers/item');

// Todos api
router.get('/todos', todoController.findAll);
router.get('/todos/:id', todoController.find);
router.post('/todos', todoController.create);
router.put('/todos/:id', todoController.update);
router.delete('/todos/:id', todoController.remove);

// Todos items api
router.get('/todos/:todoId/items', itemsController.findAll);
router.get('/todos/:todoId/items/:itemId', itemsController.find);
router.post('/todos/:todoId/items', itemsController.create);
router.put('/todos/:todoId/items/:itemId', itemsController.update);
router.delete('/todos/:todoId/items/:itemId', itemsController.remove);

module.exports = router;
