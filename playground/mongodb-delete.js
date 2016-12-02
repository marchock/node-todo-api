//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deletel many
    // db.collection('Users').deleteMany({name: 'Jeff'}).then((results) => {
    //     console.log(results);
    // });

    // delte one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
    //     console.log(results);
    // });

    // find one and delete
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5840b76012051547495cbecc")}).then((results) => {
        console.log(results);
    });


    //db.close();
});
