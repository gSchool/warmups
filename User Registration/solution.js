'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

const bcrypt = require('bcrypt-as-promised');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/users', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || username.trim() === '') {
    const err = new Error('Username must not be blank');
    err.status = 400;

    return next(err);
  }

  if (!password || password.trim() === '') {
    const err = new Error('Password must not be blank');
    err.status = 400;

    return next(err);
  }

  knex('users')
    .select(knex.raw('1=1'))
    .where('username', username)
    .first()
    .then((exists) => {
      if (exists) {
        const err = new Error('Username already exists');
        err.status = 400;

        throw err;
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashed_password) => {
      return knex('users').insert({ username, hashed_password });
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
