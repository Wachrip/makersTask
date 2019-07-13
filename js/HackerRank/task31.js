var magicSq1 = [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
];
var magicSq2 = [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6]
];
var magicSq3 = [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4]
];
var magicSq4 = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
];
var magicSq5 = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
];
var magicSq6 = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
];
var magicSq7 = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
var magicSq8 = [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4]
];

var sumFirst = 0;
var sumSecond = 0;
var sumThird = 0;
var sumFourth = 0;
var sumFifth = 0;
var sumSixth = 0;
var sumSeventh = 0;
var sumEights = 0;

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        sumFirst += Math.abs(magicSq1[i][j] - s[i][j]);
        sumSecond += Math.abs(magicSq2[i][j] - s[i][j]);
        sumThird += Math.abs(magicSq3[i][j] - s[i][j]);
        sumFourth += Math.abs(magicSq4[i][j] - s[i][j]);
        sumFifth += Math.abs(magicSq5[i][j] - s[i][j]);
        sumSixth += Math.abs(magicSq6[i][j] - s[i][j]);
        sumSeventh += Math.abs(magicSq7[i][j] - s[i][j]);
        sumEights += Math.abs(magicSq8[i][j] - s[i][j]);
    }
}

var totalSum = [sumFirst, sumSecond, sumThird, sumFourth, sumFifth, sumSixth, sumSeventh, sumEights];
totalSum = totalSum.sort((a, b) => a - b).shift(); 

return totalSum;
}

