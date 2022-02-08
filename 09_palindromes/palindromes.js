const palindromes = function (word) {
  return word === word.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
