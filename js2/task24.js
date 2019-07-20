class Animal {
    // constructor(name) {
    //     this.name = name;
    // }

}

Animal.prototype.eat = function() {
    console.log("Eat this!");
}

class Dog extends Animal {

}

Dog.prototype.bark = function() {
    console.log("Woof!");
};

var beagle = new Dog();
console.log(beagle.bark());