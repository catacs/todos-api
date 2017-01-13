'use strict';

const todoRepository = require('../repositories/factories/todo');

const create = function* (todoData) {
  debugger
  validate(todoData);
  const todo = yield todoRepository.create(todoData);
  if (!todo) {
    throw new Error('todoNotCreated');
  }

  return sanitize(todo);
};

const find = function* (id) {
  return yield todoRepository.find(id);
};

const findAll = function* () {
  return yield todoRepository.findAll();
};

const update = function* (id, todo) {
  return yield todoRepository.update(id, todo);
};

const remove = function* (id) {
  return yield todoRepository.remove(id);
};

function validate(todo) {
  if (!todo) {
    throw new Error('TodoNotValid');
  } else if (!todo.title) {
    throw new Error('TodoTitleNotProvided');
  }
}

function sanitize(todo) {
  return todo;
}

const todoService = function () {
  return {
    create: create,
    find: find,
    findAll: findAll,
    update: update,
    remove: remove,
  };
};

module.exports = todoService();
