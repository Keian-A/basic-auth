'use strict';

const express = require('express');
const cors = require('cors');
// Create variables for routes here
const signinRoute = require('./routes/signin.js');
const signupRoute = require('./routes/signup.js');

const app = express();

app.use(cors());
// Allows express to parse JSON request bodies
app.use(express.json());
// Allows express to parse url encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Hook up resource routers
app.use(signinRoute);
app.use(signupRoute);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  }
}