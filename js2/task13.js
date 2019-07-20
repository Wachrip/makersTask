class Dog {
    constructor(name,color,numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.color = color;
    }

    sayLegs () {
        console.log(`This ${this.name} has ${this.numLegs} legs`);
    }
}

var hound= new Dog('Albert', 'grey', 4);

hound.sayLegs();