require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');
var {authenticate} = require('./middleware/authenticate.js');


var app = express();
const port = process.env.PORT;


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e);
    });
})

// REST
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    console.log('req.params.id: ', req.params.id)

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }


    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    });
})

// REST
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

    res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
})

// UPDATE API
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();

    } else {
        body.completed = false;
        body.completedAt = null;

    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) => {
        res.status(400).send();
    });

});

app.post('/user', (req, res) => {

    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);


    user.save().then(() => {
        return user.generateAuthToken();

    }).then((token) => {
        res.header('x-auth', token).send(user);

    }).catch((e) => {
        res.status(400).send(e);
    });
});


app.get('/user/me', authenticate, (req, res) => {
    res.send(req.user);
});



app.listen(port, () => {
    console.log(`Started on port ${port}`)
})


module.exports = {app};




//save new something
