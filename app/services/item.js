'use strict';

const itemRepository = require('../repositories/factories/item');

const create = function* (todoId, itemData) {
  validate(itemData);
	const todoItem = Object.assign({ todoId }, itemData)
  const item = yield itemRepository.create(todoItem);
  if (!item) {
    throw new Error('itemNotCreated');
  }

  return sanitize(item);
};

const find = function* (todoId, id) {
  return yield itemRepository.find(todoId, id);
};

const findAll = function* (todoId) {
  return yield itemRepository.findAll(todoId);
};

const update = function* (todoId, id, item) {
	return yield itemRepository.update(todoId, id, item);
};

const remove = function* (todoId, id) { 
	return yield itemRepository.remove(todoId, id);
};

function validate(item) {
  if (!item) {
    throw new Error('ItemNotValid');
  } else if (!item.description) {
    throw new Error('ItemDescriptionNotProvided');
  }
}

function sanitize(item) {
  return item;
}

const itemService = function () {
  return {
    create: create,
    find: find,
    findAll: findAll,
    update: update,
    remove: remove,
  };
};

module.exports = itemService();
