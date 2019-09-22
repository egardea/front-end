const nums = ['erik', 'erik', 'raul', 'raul', 1, 1, 1, 1];

const numSet = new Set();

nums.forEach((value) => numSet.add(value));

console.log(numSet);

const singleValueArr = [];

nums.forEach((value) => {
    if(!singleValueArr.includes(value)){
        singleValueArr.push(value);
    }
})

console.log(singleValueArr);