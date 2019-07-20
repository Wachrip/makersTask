class House {
    constructor (bedrooms) {
        this.bedrooms = bedrooms;
    }

}

let myHouse = new House(4);
console.log(myHouse instanceof House);