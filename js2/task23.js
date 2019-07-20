class Animal {
    constructor(name) {
        this.name = name;
    }
}
Animal.prototype.eat = function() {
    console.log("nom nom nom ");
Animal.prototype.describe = function() {
   console.log(`My name is ${this.name}`);
    };
};

class Dog extends Animal {

}

var doggy = new Dog("Idiot");

Dog.prototype.numLegs = 4;

console.log(doggy);
