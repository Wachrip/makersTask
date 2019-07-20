class Dog {
    constructor(name) {
        this.name = name;
    }
}

var doggy = new Dog("Idiot");

// doggy.prototype.eat = function() {
//     console.log("Its eating");
// };

Dog.prototype.eat = function() {
    console.log("nom nom nom ");
};

Dog.prototype.describe = function() {
    console.log(`My name is ${this.name}`);
};
Dog.prototype.numLegs = 4;


doggy.eat();
doggy.describe();


