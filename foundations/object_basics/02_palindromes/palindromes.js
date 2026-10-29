const palindromes = function (str) {
  let noPunctuationStr = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
  let noSpacesStr = noPunctuationStr.replaceAll(" ", "");
  let lowerCaseStr = noSpacesStr.toLowerCase();

  const chars = lowerCaseStr.split(``);

  let firstIndex = 0;
  let lastIndex = chars.length - 1;
  while (firstIndex < lastIndex) {
    if (chars[firstIndex] != chars[lastIndex]) {
      return false;
    }
    firstIndex++;
    lastIndex--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
//'ab ba'
//rac e car
