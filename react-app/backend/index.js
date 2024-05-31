const express = require('express');
require('dotenv').config()

const app = express();
const port = 5000;

const mongoDB = require('./db');
mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/Login'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
