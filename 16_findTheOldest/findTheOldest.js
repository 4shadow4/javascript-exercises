const findTheOldest = function(arr) {
  arr.sort((a, b) => {
    const aLife = (a.yearOfDeath || 2025) - a.yearOfBirth;
    const bLife = (b.yearOfDeath || 2025) - b.yearOfBirth;

    return aLife - bLife;
  });

  return arr[arr.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;
