
// newTea function for post tea route
console.log("controller");
const newTea = (req, res, next) => {
    console.log("eccomi");
    res.json({ message: "POST new tea" }); // dummy function for now
};


module.exports = { newTea };