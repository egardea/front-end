//pass by value
let ex1 = 1;
let ex2 = ex1;
console.log(ex1, ex2);

//pass by ref
const ex3 = ['yes'];
const ex4 = ex3;
ex4.push('ref');
console.log(ex3, ex4);