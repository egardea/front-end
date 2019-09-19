function example (param1){
    return param1 + 1;
}

console.log(example(1))

const example2 = (param2) => {
    return param2 + 2;
};

console.log(example2(1));

const example3 = (param3) => param3 + 3;

console.log(example3(3));

const user = {
    firstName: 'Erik',
    lastName: 'Gardea',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(user.fullName());

const user2 = {
    firstName: 'Erik',
    lastName: 'Gardea',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(user2.fullName());