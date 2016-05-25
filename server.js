var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var autoincrementId = 3;
var USERS = [
    { id: 1, name: 'John Doe', age: 26 },
    { id: 2, name: 'Jane Doe', age: 24 }
];

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', function (req, res) {
    // simulate slow internet connection:
    setTimeout(function() {
        res.json({
            users: USERS
        });
    }, 30);
});

app.get('/user/:id', function (req, res) {
    var foundUser = null;
    USERS.forEach(function (user) {
        if (user.id == req.params.id) {
            foundUser = user;
        }
    });

    res.json({
        user: foundUser
    });
});

app.post('/user', function (req, res) {
    var user = req.body;
    user.id = autoincrementId++;
    USERS.push(user);

    res.json({
        user: user
    });
});

app.put('/user/:id', function (req, res) {
    var foundUser = null;
    USERS.forEach(function (user) {
        if (user.id == req.params.id) {
            foundUser = user;
        }
    });

    if (foundUser) {
        foundUser.name = req.body.name;
        foundUser.age = req.body.age;
    }

    res.json({
        user: foundUser
    });
});

app.delete('/user/:id', function (req, res) {
    var newUsers = [];
    USERS.forEach(function (user) {
        if (user.id != req.params.id) {
            newUsers.push(user);
        }
    });

    USERS = newUsers;

    res.json({
        users: USERS
    });
});

app.listen(3000, function () {
    console.log('Server is running. Open http://localhost:3000 in your browser.');
});
