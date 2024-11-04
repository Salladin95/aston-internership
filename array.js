const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

const strings = ["Hello", "world", "!"];
const joinedString = strings.join(" ");
console.log(joinedString); // "Hello world !"

const numbers = [3, 5, 1, 8, 2];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max); // 8
console.log(min); // 1
