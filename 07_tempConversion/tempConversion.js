const convertToCelsius = function (fer) {
  let a = Math.round((fer - 32) * (5 / 9));
  return a;
};

const convertToFahrenheit = function (cel) {
  let a = Math.round(cel * (9 / 5) + 32);
  return a;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
