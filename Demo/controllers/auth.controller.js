const Customer = require('../models/customer');
const signup = async (req, res) => {

    // find one if exists
    const customer = await Customer.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (!customer) {
        const newCustomer = new Customer({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            address: req.body.address,
        })



        // save this object to database
        newCustomer.save((err, data) => {
            if (err) return res.json({ Error: err });
            return res.json({ message: "Customer Created", data });
        })

        // return res.json({ message: "Customer Created", data });
    }
    else {
        return res.json({ error: "Customer already exists" });
    }

};


//export controller functions
module.exports = {
    signup
};