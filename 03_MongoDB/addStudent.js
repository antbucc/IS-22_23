const mongoose = require("mongoose");
const { Schema } = mongoose;

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


// Student Schema Definition
const schema = new Schema({ name: 'string', surname: 'string' });
const Student = mongoose.model('Student', schema);

//new student added to the DB
/*const student = new Student({ name: 'Antonio', surname: 'Bucchiarone' });
student.save(function (err) {
    if (err) return handleError(err);
    // saved!
    console.log("Student added");
});
*/


// inserting large batches of documents
/*Student.insertMany(
    [
        { name: 'mario', surname: 'rossi' },
        { name: 'paolo', surname: 'neri' }],
    function (err) {
        console.log("array of students added");
    });
*/
// deleted at most one student document
/*
Student.deleteOne({ name: 'Antonio' }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
    console.log("element deleted");
});
*/

// removing all documents matching the given filter.
/*
Student.deleteMany({ name: 'Antonio' }, function (err) {
    if (err) return handleError(err);
    // deleted at most one tank document
    console.log("elements deleted");
});
*/

