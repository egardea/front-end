//map
const price = [10, 20, 30, 40, 50];

const mapEx = price.map((val) => val + 1);

console.log(mapEx);

//filter
const filterEx = price.filter((val) => val < 30);
console.log(filterEx);

//reduce
const reduceEx = price.reduce((total, current) => {
    return total += current;
}, 0);
console.log(reduceEx);

//reduce can do map and filter in one high order function
const reduceArrayEx = price.reduce((accumulator, value) => {
    const newValue = value + 1;
    if(newValue < 30) {
        accumulator.push(newValue);
    }
    return accumulator;
}, []);
console.log(reduceArrayEx);