function sortCoutry(countries) {
    var result =countries.sort((a,b) => a.length - b.length);
    return result[result.length-1];
}

var countries = ["Россия", "Лаос", "Кыргызстан"];

console.log(sortCoutry(countries));