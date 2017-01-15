'use strict';

const ItemMongoRepository = require('../mongo/item');

const ItemRespositoryFactory = function (config) {
  return new ItemMongoRepository();
};

module.exports = ItemRespositoryFactory();
