////Mongo DB module v3

//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('unable to connect to mongodb server'); //when return is run, nothing below runs, i.e. no console.log('success') will  be displayed
  }
  console.log('connected to mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bf995906d3fe00b37626fff')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bf99e8e6d3fe00b37627651')
  }, {
      $set: {
        name: 'Jen'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
      }).then((result) => {
    console.log(result);
    });

  //client.close();
});
