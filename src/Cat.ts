// Cat.js
// A demonstrating of writing a "class" and making use of default exports.
// When you import, it will be something like import Dog from './Dog.js'
// but you could use any name like: import DogLib2 from './Dog.js'

export default class Cat
{
    public speak()
    {
        console.log("meow!");
    }
}
