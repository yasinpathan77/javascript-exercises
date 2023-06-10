const repeatString = function(name = "",count) {
    let a = "";
    if(count < 0)
        return 'ERROR';

    for(let i=0;i<count;i++)
        a += name;

    return a;
};

// Do not edit below this line
module.exports = repeatString;
