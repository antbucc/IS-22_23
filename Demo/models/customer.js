const mongoose = require("mongoose"); //import mongoose

// customer schema
const CustomerSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    address: String
});

const Customer = mongoose.model('Customer', CustomerSchema); //convert to model named Customer
module.exports = Customer; //export for controller use