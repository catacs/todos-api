'use strict';

const itemService = require('../services/item');
const error = require('../helpers/error');
const co = require('co');

/**
 * @api {post} /api/items/:itemId/items Create item item
 * @apiName create
 * @apiGroup item
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5813c666031e745f494756a0",
 *       "date": "2016-10-28T21:43:02.862Z",
 *       "description": "Test",
 *        "visible": true,
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }
 *
 */
const create = function (req, res, next) {
  co(function* () {
    const todoId = req.params.todoId;
    const itemData = req.body;
    const item = yield itemService.create(todoId, itemData);
    res.send(item);
  }).catch(next);
};

const find = function (req, res, next) {
  co(function* () {
    const todoId = req.params.todoId;
    const itemId = req.params.itemId;
    const item = yield itemService.find(todoId, itemId);
    res.send(item);
  }).catch(next);
};

const findAll = function (req, res, next) {
  co(function* () {
    const todoId = req.params.todoId;
    const items = yield itemService.findAll(todoId);
    res.send(items);
  }).catch(next);
};

const update = function (req, res, next) {
  co(function* () {
    const todoId = req.params.todoId;
    const itemId = req.params.itemId;
    const update = req.body;
    const itemUpdated = yield itemService.update(todoId, itemId, update);    
    if (!itemUpdated) {
		  return res.status(404).end();
	  }
    res.status(200).send(itemUpdated);
  }).catch(next);
};

const remove = function (req, res, next) {
  co(function* () {
    const todoId = req.params.todoId;
    const itemId = req.params.itemId;
    const item = yield itemService.remove(todoId,itemId);	
    if (!item) {
		  return res.status(404).end();
	  }
    res.send(item);
  }).catch(next);
};

function itemController() {
  return {
    create: create,
    find: find,
    findAll: findAll,
    update: update,
    remove: remove,
  };
};

module.exports = itemController();
