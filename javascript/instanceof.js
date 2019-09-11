/**Dont */
console.log('hello world' instanceof String);

/**Do */
class Circle {};
const circle = new Circle();

console.log(circle instanceof Circle);
console.log(circle instanceof Object);