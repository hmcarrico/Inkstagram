const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
//File Imports
const authController = require('./contollers/authController');

const app = express();

app.use(express.json());
app.use(session({
    secret: "mega hyper ultra secret",
    saveUninitialized: false,
    resave: false,
}));

//Auth
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/logout', authController.logout);

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db)
});

const port = 4090;
app.listen(port, () => console.log(`listening on port ${4090}`));