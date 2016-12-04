var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(proccess.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {
    mongoose
};


// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });
//
//
// var newTodo = new Todo({
//     text: '  Edit this video   '
// });
//
// newTodo.save().then((doc) => {
//     console.log('Save todo', doc)
// }, (e) => {
//     console.log('Unable to save', e)
// });

// var User = mongoose.model('Users', {
//     email: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     }
// });
//
//
// var newUser = new User({
//     email: 'ryan@bynd.com'
// });
//
// newUser.save().then((doc) => {
//     console.log('Saved User', doc)
// }, (e) => {
//     console.log('Unable to save user', e)
// });


//save new something
