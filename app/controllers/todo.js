'use strict';

const todoService = require('../services/todo');
const error = require('../helpers/error');
const co = require('co');

/**
 * @api {post} /api/todos Create todo
 * @apiName create
 * @apiGroup todo
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5813c666031e745f494799a0",
 *       "items": [],
 *       "title": "Test",
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }
 *
 */
const create = function (req, res, next) {
  co(function* () {
    const todoData = req.body;
    const todo = yield todoService.create(todoData);
    res.send(todo);
  }).catch(next);
};

/**
 * @api {get} /api/todos/:id Get todo
 * @apiName find
 * @apiGroup todo
 * 
 * @apiParam {ObjectId} id todos unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5813c666031e745f494799a0",
 *       "items": [],
 *       "title": "Test",
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }
 *
 */
const find = function (req, res, next) {
  co(function* () {
    const id = req.params.id;
    const todo = yield todoService.find(id);
    res.send(todo);
  }).catch(next);
};

/**
 * @api {get} /api/todos Get todos
 * @apiName findAll
 * @apiGroup todo
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "__v": 0,
 *       "apiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU4MTNjNjY2MDMxZTc0NWY0OTQ3OTlhMCIsImNyZWF0aW9uIjoxNDc3NjkwOTgyfQ.fFwrb0_Ot_oK0toU9kXaZwy6600ejKFm5ZhLlhsXxdk",
 *       "_id": "5813c666031e745f494799a0",
 *       "name": "sdagg",
 *       "role": "admin",
 *       "surname": "TestSurname",
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }]
 *
 */
const findAll = function (req, res, next) {
  co(function* () {
    const todos = yield todoService.findAll();
    res.send(todos);
  }).catch(next);
};

/**
 * @api {put} /api/todos/:id Update todo
 * @apiName update
 * @apiGroup todo
 * 
 * @apiParam {ObjectId} id todos unique ID.
 * @apiParam {string} title.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5813c666031e745f494799a0",
 *       "items": [],
 *       "title": "Test",
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }
 *
 */
const update = function (req, res, next) {
  co(function* () {
    const id = req.params.id;
    const update = req.body;
    const todoUpdated = yield todoService.update(id, update);
    res.status(200).send(todoUpdated);
  }).catch(next);
};

/**
 * @api {delete} /api/todos/:id Delete todo
 * @apiName remove
 * @apiGroup todo
 * 
 * @apiParam {ObjectId} id todos unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "5813c666031e745f494799a0",
 *       "items": [],
 *       "title": "Test",
 *       "updatedAt": "2016-10-28T21:43:02.862Z",
 *       "createdAt": "2016-10-28T21:43:02.845Z"
 *     }
 *
 */
const remove = function (req, res, next) {
  co(function* () {
    const id = req.params.id;
    const todo = yield todoService.remove(id);
    res.send(todo);
  }).catch(next);
};

function TodoController() {
  return {
    create: create,
    find: find,
    findAll: findAll,
    update: update,
    remove: remove,
  };
};

module.exports = TodoController();
