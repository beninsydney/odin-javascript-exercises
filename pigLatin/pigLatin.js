function pigLatin(string) {
  string = string.toLowerCase()
  const vowel = 'aeiou'.indexOf(string[0]) > -1
  return vowel ? string + 'ay' : string.substring(1) + string[0] + 'ay'
};
  
// Do not edit below this line
module.exports = pigLatin;
