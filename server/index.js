const express = require('express');
const massive = require('massive');
require(dotenv).config();

const app = express();

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db)
});

const port = 4090;
app.listen(port, () => console.log(`listening on port ${4090}`));