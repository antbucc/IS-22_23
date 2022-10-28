const dotenv = require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/tea'); // import the routes

//const mongoose = require('mongoose');
app.use(express.json());

app.use('/', routes); //to use the routes






const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})


