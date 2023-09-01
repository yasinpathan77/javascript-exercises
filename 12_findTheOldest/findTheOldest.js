const findTheOldest = function (persons) {
    return persons.reduce((oldest, person) => {
        if (!person.yearOfDeath)
            person.yearOfDeath = new Date().getFullYear();
        if (!oldest.yearOfDeath)
            oldest.yearOfDeath = new Date().getFullYear();
        let personAge = person.yearOfDeath - person.yearOfBirth;
        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;

        return (personAge > oldestAge) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
