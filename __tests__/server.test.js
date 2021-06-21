'use strict';

const server = require('../src/server.js');
const data = require('../src/models/index.js');
const supertest = require('supertest');

const request = supertest(server.app);

beforeAll(async () => {
  // creates tables from models
  await data.db.sync();
});

afterAll(async () => {
  // remove all created data entities and delete the table.
  await data.db.drop();
});

describe('testing the server', () => {
  test('Testing a 200 for POST `/signup`', async () => {
    const response = await request.post('/signup').send({
      username: "usernameTest",
      password: "passwordTest"
    });
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual("usernameTest");
  });

  test('Testing a 200 for GET `/signin`', async () => {
    const response = await request.get('/signin').auth("usernameTest", "passwordTest");
    console.log(response.body.password);
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual("usernameTest");
    expect(response.body.password).not.toEqual("passwordTest");
  });
});