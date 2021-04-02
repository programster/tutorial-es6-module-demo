// Cat.js
// A demonstrating of writing a "class" and making use of default exports.
// When you import, it will be something like import Dog from './Dog.js'
// but you could use any name like: import DogLib2 from './Dog.js'
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.speak = function () {
        console.log("meow!");
    };
    return Cat;
}());
export default Cat;
