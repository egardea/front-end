function add (...num) {
    const nums = [...num, 4, 5, 6];
    console.log(nums);
    console.log(num);
};
add(1, 2, 3);