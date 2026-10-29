const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, number) => total + number, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let factorialSum = 1;
  while (num > 0) {
    factorialSum *= num;
    num--;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
