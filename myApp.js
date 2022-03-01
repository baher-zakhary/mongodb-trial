require('dotenv').config()

var express = require('express');
var app = express();

const mongoose = require('mongoose');
const URI = process.env.MONGO_LOCAL_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  console.log("Test mongodb trial");
});
































module.exports = app;
