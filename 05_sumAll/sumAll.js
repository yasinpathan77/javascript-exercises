const sumAll = function (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }


    let ans = 0;
    while (a <= b) {
        ans += a;
        a++;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
