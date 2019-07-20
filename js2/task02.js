var letters = 'johono';
var findingLetter = 'o';

function findLetter(letters, letter) {
    var counter =0;
    for(var i=0;i<letters.length; i++) {
        if(letters[i]===letter) {
            counter++;
        }
    }
    return counter;
}

console.log(findLetter(letters,findingLetter));