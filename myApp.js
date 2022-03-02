require('dotenv').config()

var express = require('express');
var app = express();

const mongoose = require('mongoose');
const URI = process.env.MONGO_LOCAL_DB_URI;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model("Person", personSchema);

const Lilly = new Person({
  name: "Lilly",
  age: 30,
  favoriteFoods: ["Pizza", "Pasta"]
});

const createAndSavePerson = (person, done) => {
  person.save((err, data) => {
    if (err) {
      console.error(err);
    } else {
      done(null, data);
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      console.error(err);
    }
    done(null, data)
  });
};

app.get('/', (req, res) => {
  console.log("Test mongodb trial");
});

module.exports = app;
