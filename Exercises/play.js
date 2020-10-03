const name = 'Max';
let age = 29;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {

    return('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);

}

const addOne = (a) => {return a + 1;}

console.log(summarizeUser(name, age, hasHobbies));
console.log(addOne(1));
