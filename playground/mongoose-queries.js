const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

//var id = '584373dd38ea98557044be8e'; // todo id
var id = '584342e6951d0a5203ed0b1d'; // user id

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });
//
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found')
//     }
//     console.log("Todo By id", todo);
// }).catch((e) => {
//     console.log(e)
// })


User.findById('584342e6951d0a5203ed0b1d').then((user) => {
    if (!user) {
        return console.log('id not found')
    }
    console.log("User By id", user);
}).catch((e) => {
    console.log(e)
})
