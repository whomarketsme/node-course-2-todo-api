const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  ////res.send(req.params);

  //validate // ID
  if (!ObjectID.isValid(id)) {
    //404-send back empty
    res.status(404).send();
    return console.log('ID not valid');
  }
  //findById
  Todo.findById(id).then((data) => {
    //if no todo - send back 404 with an empty body
    if (!data) {
      res.status(404).send();
      return console.log('Item not found');
    }
    //success
      //if todo - send it back
    res.send({data});
    console.log(JSON.stringify(data, undefined, 2));
    //error
      //400 - and send empty body back
  }).catch((e) => res.status(400).send());







});

app.listen(port, () => {
  console.log('Started up at port ${port}');
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

module.exports = {app};
