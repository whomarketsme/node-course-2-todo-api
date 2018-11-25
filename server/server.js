const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/_id=192910

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// const newUser = new User({
//   email: 'me@forexample.com'
// });
//
// newUser.save().then((data) => {
//   console.log(JSON.stringify(data, undefined, 2));
// }, (e) => {
//   console.log('Could not save the data', e);
// });
