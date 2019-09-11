const example = [1];
const badExample = new Array();
const example2 = example.map(val => {
    return val * 2;
});

console.log(example);
console.log(example2);
console.log(badExample);