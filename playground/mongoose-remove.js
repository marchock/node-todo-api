const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');


// Removes all
// Todo.remove({}).then((result) => {
//     console.log(result)
// });
//


//
// Todo.findOneAndRemove({_id: '584488309845706f7b6feb12'}).then((result) => {
//     console.log(result)
// })


Todo.findByIdAndRemove('584488309845706f7b6feb12').then((todo) => {
    console.log(todo)
})
