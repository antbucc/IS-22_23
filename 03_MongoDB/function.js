
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Uri =
    "mongodb+srv://antbucc:test1234@cluster0.szazbxv.mongodb.net/test?retryWrites=true&w=majority";

run().catch(error => console.log(error.stack));

async function run() {
    try {
        // Connect to the MongoDB cluster
        mongoose.connect(
            Uri,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => console.log(" Mongoose is connected"),
        );
    } catch (e) {
        console.log("could not connect");
    }


    const customerSchema = new mongoose.Schema({ name: String, age: Number, email: String });
    const Customer = mongoose.model('Customer', customerSchema);

    await Customer.create({ name: 'A', age: 30, email: 'a@foo.bar' });
    await Customer.create({ name: 'B', age: 28, email: 'b@foo.bar' });

    // Find all customers
    const docs = await Customer.find();
    console.log(docs);
}