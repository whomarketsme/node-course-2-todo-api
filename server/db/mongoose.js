const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //setup to use promises
//mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://<whomarketsme>:<getitDone_34?mmt>@ds123224.mlab.com:23224/todo-app');

module.exports = {
  mongoose
};
