//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5841f93450d3902a03ee1898")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    //
    // }).then((results) => {
    //     console.log(results);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5840b74f045b0047410904f5")
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false

    }).then((results) => {
        console.log(results);
    });


    //db.close();
});
