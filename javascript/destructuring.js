const birthday = [10, 25, 1987];
const [month, day, year] = birthday;

const user = {
    firstName: 'Erik',
    middleName: 'Raul',
    lastName: 'Gardea Quinonez'
};

const {firstName: fn} = user;

console.log(fn);
console.log(month);
console.log(day);
