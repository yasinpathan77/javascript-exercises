const fibonacci = function (num) {
    num = Number(num);
    if (num <= 0) return "OOPS";

    let a = 1, b = 1, sum = 1;
    for (let index = 0; index < num - 2; index++) {
        sum = a + b;
        b = a;
        a = sum;
    }
    return sum;
};

/*
    1, 1, 2, 3, 5, 8,

    sum = 0 
    initial = 1

    sum = sum + initial;
    sum = 0 + 1;
    sum = 1;

    sum = 1 + 1;
    sum = 2;

    sum = 2 + 1
    sum = 3;

    sum = 3 + 2
    sum = 5

    sum = 5 + 3
    sum = 8
*/

// Do not edit below this line
module.exports = fibonacci;
