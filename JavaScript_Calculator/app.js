const express = require('express');
const config = require('./config/config');
const app = express();

let env = process.env.NODE_ENV || 'development';
require('./config/express')(app, config[env]);
require('./config/routes')(app);

module.exports = app;