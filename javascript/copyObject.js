const user1 = {
    name: 'Erik',
    age: 26,
    job: 'Software',
};

const user = user1;

const user2  = {...user1};

const user3 = JSON.parse(JSON.stringify(user1));

//they are not the same 
console.log(user1);
console.log(Object.is(user1, user2));
console.log(user3);
console.log(Object.is(user1, user3));

//they are the same
console.log(Object.is(user1, user));
