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
    console.log(`${this.name} ate smth`);
}

Dog.prototype.describe = function() {
    console.log(`Describing dog`);
}

Dog.prototype.numLegs = 4;

doggy.eat();
doggy.describe();


