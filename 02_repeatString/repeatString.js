const repeatString = function(string, num) {
  let combined = ''
  while (num--) {
    combined += string
  }
  return combined
};

// Do not edit below this line
module.exports = repeatString;
