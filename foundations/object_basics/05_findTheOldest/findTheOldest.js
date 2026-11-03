const findTheOldest = function (people) {
  return people.reduce((base, current) => {
    const lastDeath = base.yearOfDeath ?? new Date().getFullYear();
    const nextDeath = current.yearOfDeath ?? new Date().getFullYear();

    const lastAge = lastDeath - base.yearOfBirth;
    const nextAge = nextDeath - current.yearOfBirth;

    return nextAge > lastAge ? current : base;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
