class Dog {
    constructor(name,color) {
        this.name = name;
        this.color = color;
        this.numLegs =4;
    }

    sayLegs () {
        console.log(`This ${this.name} has ${this.numLegs} legs`);
    }

    ownProps() {
        for(var key in this) {
            console.log(key);
        };
    }
}

var terrier = new Dog('Bruce', 'red');

terrier.ownProps();
// terrier.sayLegs();