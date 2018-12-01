require('./confing/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

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

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return console.log('ID not valid');
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
      return console.log('ID not found');
    }
    //res.status(200).send(todo);
    res.send({todo}); //means {todo: todo} --- needed for testing
    console.log('Data successfully deleted');
  }).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick (req.body, ['text', 'completed']);
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return console.log('ID not valid');
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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
