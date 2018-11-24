////Mongo DB module v2

// const MongoClient = require('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//   if (err) {
//     return console.log('unable to connect to mongodb server'); //when return is run, nothing below runs, i.e. no console.log('success') will  be displayed
//   }
//   console.log('connected to mongodb server');
//
//   db.collection('Todos').insertOne({
//     text: 'something to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('unable to insert todo', err);
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
//   db.close();
// });

//////////////////////////
////Mongo DB module v3

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// //object destructuring
// var user = {
//   name: 'Andrew',
//   age: 25
// };
// var {name} = user;
// console.log(name);
// // -:-

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server'); //when return is run, nothing below runs, i.e. no console.log('success') will  be displayed
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   //_id: 123,
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia, PA, USA'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('unable to insert data into db', err);
  //   }
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp()); //retrieve time from mondodb id in GMT
  // });

  client.close();
});
