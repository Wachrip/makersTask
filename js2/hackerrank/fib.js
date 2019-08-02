function fibonacci(n) {
    var num1 = 0;
    var num2 = 1;

    for (var i = 0; i < n - 1; i++) {
        var number = num1 + num2;
        num1 = num2;
        num2 = number;
    }
    return number;
}

console.log(fibonacci(2));