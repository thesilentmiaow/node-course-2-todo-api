const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=> {
//   console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove()



Todo.findByIdAndRemove('58de89812a3e4e173c081674').then((todo) => {
  console.log(todo);
});
