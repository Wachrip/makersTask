var dog ={
    name : "Doggy",
    numLegs : 4,
    sayLegs: function() {
        console.log(`This ${this.name} has ${this.numLegs} legs`);
    }
}

dog.sayLegs();