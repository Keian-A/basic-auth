'use strict';

require('dotenv').config();
const server = require('./src/server.js');
const data = require('./src/models/index.js');

const PORT = process.env.PORT || 3000;

// create data tables and start server
data.db.sync().then(() => {
  server.start(PORT);
});