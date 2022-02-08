const snakeCase = function(string) {
  return string.replace(/[^a-z0-9]/gmi, " ").replace(/\s+/g, " ").toLowerCase().split(' ').join('_')
};

// Do not edit below this line
module.exports = snakeCase;
