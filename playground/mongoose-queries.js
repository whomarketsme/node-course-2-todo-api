const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bfaff96757bfbe671957a411';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
// if (!todo) {
//   return console.log('ID not found');
// }
//   console.log('Todo by ID: ', todo);
// }).catch((e) => console.log(e));

var id = '5bf9cd3a876b83e379f63690';

if (!ObjectID.isValid(id)) {
  console.log('User ID not valid');
} else {
  console.log('User found');
}

User.findById(id).then((data) => {
  if (!data) {
    return console.log('User not found');
  }
  console.log('User ID: ', JSON.stringify(data, undefined, 2));
}).catch((e) => console.log(e));
