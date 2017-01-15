'use strict';
// Register schema before using it
const ItemSchema = require('../../models/item');
const db = require('../../models/database');
const Item = db.model('Item');

const create = function* (itemData) {
  //create new item model
  const item = new Item(itemData);

  const result = yield Item.create(item);
  return result;
};

const find = function* (todoId, id) {
  const query = {
    _id: id,
    todoId: todoId,
  }
  const result = yield Item.findOne(query).exec();
  return result;
};

const findAll = function* (todoId) {
  const query = {
    todoId,
  };
  const result = yield Item.find(query)
                     .sort({ updatedAt: -1 })
                     .lean()
                     .exec();
  return result;
};

const update = function* (todoId, id, item) {
  const query = {
    _id: id,
    todoId: todoId,
  }
  const result = yield Item.findOneAndUpdate(query, item).exec();
  return result;
};

const remove = function * (todoId, id) {
  const query = {
    _id: id,
    todoId: todoId,
  }
  const item = yield Item.findOneAndRemove(query).exec();
  return item;
};

const ItemRepository = function () {
};

ItemRepository.prototype = {
  create: create,
  find: find,
  findAll: findAll,
  update: update,
  remove: remove,
};

module.exports = ItemRepository;
