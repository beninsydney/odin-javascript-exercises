const ftoc = function(fahrenheight) {
  return (fahrenheight - 32) / 5/9
};

const ctof = function(celcius) {
  return celcius * (9/5 + 32)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
