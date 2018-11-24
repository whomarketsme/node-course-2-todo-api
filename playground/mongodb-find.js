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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5bf978e16d3fe00b37626364')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Andrew'}).toArray().then((names) => {
    console.log(JSON.stringify(names, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data', err);
  });

  //client.close();
});
