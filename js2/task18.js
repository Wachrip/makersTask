class Dog {
    constructor(name,color) {
        this.name = name;
        this.color = color;
    }

    sayLegs () {
        console.log(`This ${this.name} has ${this.numLegs} legs`);
    }


    showOwnProps() {
        console.log(Object.getOwnPropertyNames(this));
    }

    showProtProps() {
        console.log(Object.keys(Object.getPrototypeOf(this)));
    }

    ownProps() {
        for(var key in this) {
            console.log(key);
        };
    }
}

Dog.prototype.numLegs =4;
var terrier = new Dog('Bruce', 'red');



terrier.showOwnProps();
terrier.showProtProps();

