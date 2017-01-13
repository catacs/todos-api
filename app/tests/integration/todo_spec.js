'use strict';

//Assertion tool
const chai = require('chai');
const expect = chai.expect;
const co = require('co');

//Application
const app = require('../../../app');
const request = require('supertest')(app);

// Todo Model
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const apiUrl = '/api/todos';

fakeTodo = {
  title: 'Test',
  items: [],
};

describe('User', function () {
  describe('POST /api/todos', function () {
    it('Should create new todo', function (done) {
      request.post(apiUrl).send(fakeTodo).end(function (err, res) {
        if (err) {
          done(err);
        }

        expect(res.statusCode).to.equal(200);
        const todo = res.body;
        expect(todo).to.be.a('object');
        expect(todo).to.have.property('title');
        expect(todo).to.have.property('items');
        expect(todo).to.have.property('createdAt');
        expect(todo).to.have.property('updatedAt');
        expect(todo.name).to.equal(fakeTodo.title);
        done();
      });
    });
  });

  describe('PUT /api/todos/:id', function () {
    it('Should update todo', function (done) {
      co(function* () {
        const createdTodo = yield Todo.create(fakeTodo);
        return createdTodo;
      }).then(function (todo) {
        update = { title: 'ModifiedName' };
        request.put(`${apiUrl}/${todo.id}`).send(update).end(function (err, res) {
          if (err) {
            done(err);
          }

          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });
  });

  describe('GET /api/todos', function () {
    it('Should get todo', function (done) {
      co(function* () {
        const createdTodo = yield Todo.create(fakeTodo);
        return createdUser;
      }).then(function (todo) {
        request.get(`${apiUrl}/${todo._id}`).end(function (err, res) {
          if (err) {
            done(err);
          }

          expect(res.statusCode).to.equal(200);
          expect(res.body[0].title).to.equal(todo.title);
          done();
        });
      });
    });
  });

  describe('DELETE /api/todos', function () {
    it('Should delete todo', function (done) {
      co(function* () {
        const createdTodo = yield Todo.create(fakeTodo);
        return createdTodo;
      }).then(function (todo) {
        request.delete(`${apiUrl}/${todo.id}`).end(function (err, res) {
          if (err) {
            done(err);
          }

          expect(res.statusCode).to.equal(200);
          done();
        });
      });
    });
  });
});
