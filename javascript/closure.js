//function add1() {
//    let count = 0;
//    counter++;
//    return counter;
//}

//console.log(add1());

const add2 = (function() {
    let counter = 0;
    return function(){
        counter++;
        return counter;
    };
})();

console.log(add2());