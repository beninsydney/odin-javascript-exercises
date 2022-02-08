const findTheOldest = function(people) {
  people.sort((a, b) => {
    const age1 = a.yearOfDeath - a.yearOfBirth
    const age2 = b.yearOfDeath - b.yearOfBirth
    return age1 < age2 ? 1 : -1
  })
  return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
