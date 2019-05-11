const express = require('express');
const massive = require('massive');
require(dotenv).config();

const app = express();

app.use(express.json());

const port = 4090;
app.listen(port, () => console.log(`listening on port ${4090}`));