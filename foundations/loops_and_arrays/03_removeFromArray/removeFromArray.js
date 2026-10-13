const removeFromArray = function (arr, num) {
  const args = [...arguments];

  let newArr = [];
  for (let i = 1; i < arguments.length; i++) {
    while (arr.includes(args[i])) {
      let index = arr.indexOf(args[i]);
      arr.splice(index, 1);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
