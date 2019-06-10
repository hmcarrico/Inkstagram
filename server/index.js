const express = require('express');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
//File Imports
// const authController = require('./contollers/authController');
// const postContoroller = require('./contollers/postController');

const app = express();

app.use(express.json());
app.use(session({
    secret: "LIHAOBRQ8FWB008B8B938BG3BG",
    saveUninitialized: false,
    resave: false,
}));

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db)
});

const port = 4090;
app.listen(port, () => console.log(`listening on port ${port}`));