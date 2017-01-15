'use strict';

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ItemSchema = new Schema({
    date:  {
      type: Date,
      default: Date.now,
    },
		todoId: {
    	type: ObjectId,
    	required: true
  	},
    description: String,
    visible: Boolean,
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
ItemSchema.pre('save', function (next) {    
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
ItemSchema.pre('update', function (next) {
  // get the current date
  const currentDate = new Date();

  // change the updatedAt field to current date
  this.updatedAt = currentDate;

  next();
});

const Item = mongoose.model('Item', ItemSchema);
