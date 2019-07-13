var webmaster = "webmaster";
var alphWebmaster = alph(webmaster);

function alph(arr) {
    return arr.split("").sort().join("");
}

console.log(alphWebmaster);