var inputVal = "madsam";
var reverseVal = reverse(inputVal);

function reverse(arr) {
    return arr.split("").reverse().join("");
}

if(inputVal==reverseVal) {
    console.log("true");
} else {console.log("false");}