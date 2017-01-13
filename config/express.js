'use strict';

const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');

const logger = require('../app/utils/logger');

module.exports =  function(app, config) {
  logger.debug("Overriding 'Express' logger");
  app.use(morgan('dev', { stream: logger.stream }));
  app.use(compression());
  app.use(bodyParser.json());
  app.use(methodOverride());
  
  app.disable('x-powered-by');
};
