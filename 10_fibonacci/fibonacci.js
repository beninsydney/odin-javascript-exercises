const fibonacci = function(target) {
  let iterations = 0
  const numbers = []
  while (iterations < target) {
    if (numbers.length === 0) {
      numbers.unshift(1)
    } else if (numbers.length === 1) {
      numbers.unshift(1)
    } else {
      numbers.unshift(numbers[0] + numbers[1])
      numbers.pop()
    }
    iterations++
  }
  return numbers[0]
};

// Do not edit below this line
module.exports = fibonacci;
