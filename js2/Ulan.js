// function Human(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
//   ﻿
//   var myFather = new Human("John", "Doe", 50, "blue");
//   var myMother = new Human("Sally", "Rally", 48, "green");

//   Human.prototype.nationality = "English";

//   console.log(myFather.nationality);


function Cat(name) {
    this.name = name; 
  }
  ﻿
  Cat.prototype = {
    constructor: Cat, 
  };
  ﻿
  function Bear(name) {
    this.name = name; 
  }
  ﻿
  Bear.prototype = {
    constructor: Bear, 
  };

  function Animal() { }
﻿
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Cat.prototype = Object.create(Animal.prototype);
// ﻿
// let c = new Cat("Donald");
// c.eat(); // prints "nom nom nom"
// -------------------------------------------------------
// function destr(name,lastname,job) { 
//     return `${name} ${lastname} ${job}`
// }

// var arr=['Atai' , 'Omurzakov', 'dancer'];
// var copyArr = {...arr};
// console.log(destr(...arr));
// --------------------------------------------------

var animal = {
    name: 'Somename',
    getInfo: function() {
        console.log('Work');
    }
}
// var {name,getInfo} = animal;

var {...animal} = animal;

console.log(name);