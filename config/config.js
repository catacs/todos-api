'use strict';

const env = process.env.NODE_ENV || 'development';
const defaults = require('./defaults.json');
const envConf = require('./' + env + '.json');
const _ = require('lodash');

const configuration = _.extend(defaults, envConf);

module.exports = function () {
  return configuration;
};
