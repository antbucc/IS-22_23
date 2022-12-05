const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const tokenChecker = require('./tokenChecker.js');

const students = require('./students.js');
const books = require('./books.js');
const booklendings = require('./booklendings.js');

const authentication = require('./authentication.js');
const mongoose = require('mongoose');
app.use(express.json());

app.use(cors())

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) return console.log("Error: ", err);
        console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})

app.use('/api/v1/authentications', authentication);
app.use('/api/v1/booklendings', tokenChecker);
app.use('/api/v1/students/me', tokenChecker);


app.use('/api/v1/books', books);
app.use('/api/v1/students', students);
app.use('/api/v1/booklendings', booklendings);





