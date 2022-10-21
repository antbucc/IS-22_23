console.log("Hello World!");
/*
function myF() { const me = 'me'; }
console.log(me)
*/

/*
const year = 2023;
if (year > 2022) {
    const me = 'me';
    var you = 'you';
    console.log(you);
    console.log(me);
}
*/

/*
var myvar;
console.log(typeof (myvar));            // undefined

myvar = 'Pippo';                        // string
myvar = 5;                              // number
myvar = true;                           // boolean
myvar = [1, 2, 3];                        // object
myvar = { key1: "value1" };               // object 
myvar = null;                           // object 
myvar = function (n) { return n + 1 };        // function

console.log(Array.isArray([1, 2, 3]));    // true
*/


/*
var list = ["apple", "pear", "peach"];  //list of elements
list[0];                                 // accessing an element by id
list.indexOf("pear");                    // checking the index of "pear" in the array
console.log(list);
list.push("banana");                     // Adding a new element
console.log(list);
list.pop();                             // Taking the last element from the array
console.log(list);
list.shift();                           // Taking the first element
console.log(list);
list.length;              // checking the number of elements                         
var portion = list.slice(1, 1);          // copy a subportion of the original array
console.log("porzione: " + portion);
var result = list.join(', ');   //return string by concatening elements
console.log(result);

*/

/*
var car = {
    type: 'Fiat',
    model: '500',
    color: 'red',
    description: function () {
        return this.color + ", " + this.model + ", " + this.type;
    }
    // methods cannot be defined using arrow functions!
    // in the case of arrow functions, context 'this' is not assotiated to the object
}
console.log(car);
console.log(car.description());

*/


class Car3 {
    constructor(type, model, color) {
        this.type = type;
        this.model = model;
        this.color = color;
    }
    description() {
        return this.color + ", " + this.model + ", " + this.type;
    };
}
var fiatPuntobianca = new Car3('Fiat', 'Punto', 'white');
console.log(fiatPuntobianca);
console.log(fiatPuntobianca.description());



class Suv extends Car3 {
    description() {
        return this.color + ", " + this.model + ", " + this.type + ", SUV";
    };
}
var NissanQuashqai = new Suv('Nissan', 'Quashqai', 'black');
console.log(NissanQuashqai);
console.log(NissanQuashqai.description());
