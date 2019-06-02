import * as ArrayLib from './ArrayLib.js';
import Dog from './Dog.js'

// demonstrating a library of useful functions
var myArray = [1,2,3];
console.log("first: " + ArrayLib.first(myArray));
console.log("last: " + ArrayLib.last(myArray));

// demonstrating a class
let dog = new Dog();
dog.bark();




