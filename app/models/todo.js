'use strict';

const uuid = require('node-uuid');
const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  items: [{
    date:  {
      type: Date,
      default: Date.now,
    },
    description: String,
    visible: Boolean,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// on every save, add the date
TodoSchema.pre('save', function (next) {    
  // get the current date
  const currentDate = new Date();

  // change the updatedAt field to current date
  this.updatedAt = currentDate;

  // if createdAt doesn't exist, add to that field
  if (!this.createdAt)
    this.createdAt = currentDate;

  next();
});

// on every save, add the date
TodoSchema.pre('update', function (next) {
  // get the current date
  const currentDate = new Date();

  // change the updatedAt field to current date
  this.updatedAt = currentDate;

  next();
});

const Todo = mongoose.model('Todo', TodoSchema);
