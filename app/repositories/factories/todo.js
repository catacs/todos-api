'use strict';

const TodoMongoRepository = require('../mongo/todo');

const TodoRespositoryFactory = function (config) {
  return new TodoMongoRepository();
};

module.exports = TodoRespositoryFactory();
