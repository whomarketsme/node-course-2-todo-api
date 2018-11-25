const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //if text is filled with spaces only, trim cuts them out
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: 'cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', doc);
// }, (e) => {
//   console.log('Unable to save todo.');
// });

// var newTodo = new Todo({
//   text: '   Film a course    '
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo: ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

module.exports = {Todo};
