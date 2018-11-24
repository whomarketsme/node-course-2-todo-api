////Mongo DB module v3

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server'); //when return is run, nothing below runs, i.e. no console.log('success') will  be displayed
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');

  //deleteMany

  // db.collection('Todos').deleteMany({text: 'lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({text: 'lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5bf93e094bf25fe0d79ff0b9")}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2);
  // });

  //client.close();
});
