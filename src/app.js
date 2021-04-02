import * as ArrayLib from './ArrayLib.js';

// example using one file per class
import Dog from './Dog.js'
import Cat from './Cat.js'

// example where lot of classes in one file.
//import {Cat, Dog} from './Animals.js'



// demonstrating a library of useful functions
var myArray = [1,2,3];
console.log("first: " + ArrayLib.first(myArray));
console.log("last: " + ArrayLib.last(myArray));

// demonstrating a class
let dog = new Dog();
dog.speak();

let cat = new Cat();
cat.speak();


