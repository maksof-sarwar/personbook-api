const express = require('express');
const app = express();

const book = require('./route/book')();
app.use('/book', book)

const person = require('./route/person')();
app.use('/person', person)

module.exports= app;