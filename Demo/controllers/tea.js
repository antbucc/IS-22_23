const Tea = require('../models/tea');
// newTea function for post tea route
//POST tea
const newTea = (req, res) => {
    //check if the tea name already exists in db
    console.log("qui");
    Tea.findOne({ name: req.body.name }, (err, data) => {

        //if tea not in db, add it
        if (!data) {
            //create a new tea object using the Tea model and req.body
            const newTea = new Tea({
                name: req.body.name,
                image: req.body.image, // placeholder for now
                description: req.body.description,
                keywords: req.body.keywords,
                origin: req.body.origin,
                brew_time: req.body.brew_time,
                temperature: req.body.temperature,
            })

            // save this object to database
            newTea.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
            //if there's an error or the tea is in db, return a message         
        } else {
            if (err) return res.json(`Something went wrong, please try again. ${err}`);
            return res.json({ message: "Tea already exists" });
        }
    })
};


//GET all teas
const getAllTea = (req, res) => {
    Tea.find({}, (err, data) => {
        if (err) {
            return res.json({ Error: err });
        }
        return res.json(data);
    })
};

//DELETE teas
const deleteAllTea = (req, res) => {
    Tea.deleteMany({}, err => {
        if (err) {
            return res.json({ message: "Complete delete failed" });
        }
        return res.json({ message: "Complete delete successful" });
    })
};

const getOneTea = (req, res) => {
    let name = req.params.name; //get the tea name
    console.log(name);

    //find the specific tea with that name
    Tea.findOne({ name: name }, (err, data) => {
        if (err || !data) {
            return res.json({ message: "Tea doesn't exist." });
        }
        else return res.json(data); //return the tea object if found
    });
};


//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {

    // Query for a tea that has name
    let teaName = req.params.name;
    var query = { name: teaName };

    //const result = Tea.deleteOne(query);
    Tea.deleteOne(query, (err, collection) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Tea deleted successfully");
            res.json({ message: "DELETE 1 tea" });
        }

    });


};






//export controller functions
module.exports = {
    getAllTea,
    newTea,
    deleteAllTea,
    getOneTea,
    deleteOneTea
};