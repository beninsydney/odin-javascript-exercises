const caesar = function(word, shift) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let output = ''
  for (const char of word) {
    output += letters[letters.indexOf(char) + shift]
  }
  return output
};

// Do not edit below this line
module.exports = caesar;
