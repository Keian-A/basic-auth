'use strict';

const express = require('express');
const router = express.Router();
const { users } = require('../models/index.js');

router.post('/signup', async (req, res) => {
  let signupRow = await users.create(req.body);
  res.status(200).send(signupRow);
});

module.exports = router;