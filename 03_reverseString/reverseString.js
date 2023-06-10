const reverseString = function(name = "") {
    if(name.length == 0)
        return "";
    let reverse = "";
    for(let i = name.length -1; i >= 0;i--)
        reverse += name.charAt(i);
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
