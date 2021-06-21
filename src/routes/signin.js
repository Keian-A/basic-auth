'use strict';

const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const router = express.Router();
const { users } = require('../models/index.js');

router.get('/signin', async (req, res) => {
  let authHeaders = req.headers.authorization;
  let basicString = authHeaders.split(' ')[1];
  let decodedString = base64.decode(basicString);
  let [username, password] = decodedString.split(':');
  let userFromDB = await users.findOne({ where: { username: username } });
  let isValid = await bcrypt.compare(password, userFromDB.password);
  if (isValid) {
    res.send(userFromDB);
  } else {
    res.status(401).send('Invalid login');
  }
});

module.exports = router;