'use strict';
// Register schema before using it
const TodoSchema = require('../../models/todo');
const db = require('../../models/database');
const Todo = db.model('Todo');

const create = function* (todoData) {
  //create new todo model
  const todo = new Todo(todoData);

  const result = yield Todo.create(todo);
  return result;
};

const find = function* (id) {
  const result = yield Todo.findById(id).exec();
  return result;
};

const findAll = function* () {
  const result = yield Todo.find()
                     .sort({ updatedAt: -1 })
                     .lean()
                     .exec();
  return result;
};

const update = function* (id, todo) {
  const result = yield Todo.findByIdAndUpdate(id, todo).exec();
  return result;
};

const remove = function * (id) {
  const todo = yield Todo.findByIdAndRemove(id).exec();
  return todo;
};

const TodoRepository = function () {
};

TodoRepository.prototype = {
  create: create,
  find: find,
  findAll: findAll,
  update: update,
  remove: remove,
};

module.exports = TodoRepository;
