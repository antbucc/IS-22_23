/*
for (var i = 0; i < process.argv.length; i++) {
    console.log(i + ' -> ' + (process.argv[i]));
}
*/

/*
// Loading the file system library
var fs = require("fs");
// File name from the common line params
var fileName = process.argv[2];
console.log(fileName);
// Accessing the content of the file synchnously  
var data = fs.readFileSync(fileName, "utf8");
console.log(data);

*/

/*
var fs = require("fs");
var data = fs.readFileSync("dati.json", "utf8");
console.log(data);

console.log("Program ended.");

*/

// Loading the file system library
var fs = require("fs");

// File name from the common line params
var fileName = process.argv[2];

// Accessing the content of the file asynchnously  
fs.readFile(fileName, "utf8", function (error, data) {
    console.log(data);
});

console.log("Program ended.");

