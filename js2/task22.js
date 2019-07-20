class Animal {
    constructor(name) {
        this.name = name;
    }
}

Animal.prototype.eat = function() {
    console.log("nom nom nom ");
Dog.prototype.describe = function() {
   console.log(`My name is ${this.name}`);
    };
};

class Dog extends Animal {

}


var doggy = new Dog("Idiot");


Dog.prototype.numLegs = 4;


class Bear extends Animal {

}

var greyBear = new Bear("WhatABear");
console.log(greyBear.eat());

