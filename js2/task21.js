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

class Cat extends Animal {

}

var doggy = new Cat("Idiot");

Cat.prototype.numLegs = 4;

class Bear extends Animal {

}

var greyBear = new Bear("WhatABear");
console.log(greyBear.name);

