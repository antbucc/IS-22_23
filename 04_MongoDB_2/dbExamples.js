const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models");


const app = express();


const mongoAtlasUri =
    "mongodb+srv://antbucc:test1234@cluster0.szazbxv.mongodb.net/test?retryWrites=true&w=majority";


try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));


//new user added to the DB
const user = new userModel({ name: 'Antonio Bucchiarone', age: 32 });
user.save(function (err) {
    if (err) return handleError(err);
    // saved!
    console.log("User added");
});


// inserting large batches of documents
userModel.insertMany(
    [
        { name: 'mario rossi', age: 40 },
        { name: 'paolo neri', age: 25 }
    ],
    function (err) {
        console.log("array of users added");
    });


// deleted at most one student document

userModel.deleteOne({ name: 'Antonio Bucchiarone' }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
    console.log("element deleted");
});


// removing all documents matching the given filter.

userModel.deleteMany({ name: 'Antonio Bucchiarone' }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
    console.log("elements deleted");
});

// Find one user whose `name` is 'Antonio Bucchiarone', otherwise `null`
userModel.findOne({ name: 'mario rossi' }, function (err, user) {
    console.log("age: " + user.age);
});


const Character = mongoose.model('Character', mongoose.Schema({
    name: String,
    age: Number,
    rank: String
}));


Character.create([
    { name: 'Jean-Luc Picard', age: 59, rank: 'Captain' },
    { name: 'William Riker', age: 29, rank: 'Commander' },
    { name: 'Deanna Troi', age: 28, rank: 'Lieutenant Commander' },
    { name: 'Geordi La Forge', age: 29, rank: 'Lieutenant' },
    { name: 'Worf', age: 24, rank: 'Lieutenant' }
]);

const docs = Character.find({ rank: 'Lieutenant' });


// MongoDB may return the docs in any order unless you explicitly sort
Character.find({}).sort('age').
    exec(function (err, docs) {
        console.log(docs);
    });


Character.find({ rank: 'Lieutenant' }).exec(function (err, docs) {
    console.log("documenti trovati: " + docs.length);
});


Character.find({ age: 29 }).exec(function (err, docs) {
    console.log("documenti trovati: " + docs.length);
});

