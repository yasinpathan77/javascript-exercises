const removeFromArray = function(names = [],...remove) {
    let james =  names.filter((x) => !remove.includes(x));
    return james;
};

// Do not edit below this line
module.exports = removeFromArray;
