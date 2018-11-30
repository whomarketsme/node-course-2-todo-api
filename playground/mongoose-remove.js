const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//3 mongoose methods for deleting records
  //Todo.remove({}) - removes all matching
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

  //Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5c01a7f56d3fe00b37629d78'}).then((todo) => {
  console.log(todo);
});
  //Todo.findByIdAndRemove
Todo.findByIdAndRemove('5c01a7f56d3fe00b37629d78').then((todo) => {
  console.log(todo);
});
