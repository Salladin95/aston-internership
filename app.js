function helloWorld() {
	return 'Привет, мир!';
}

const str1 = "Hello, World!";
const str2 = String("Hello, again!");

const num1 = 42;
const num2 = Number(42);

const bool1 = true;
const bool2 = Boolean(false);

const nullValue = null;

let undefinedValue;
const undefinedValue2 = undefined;

const sym1 = Symbol("foo");
const sym2 = Symbol();

const bigInt1 = 123456789012345678901234567890n;
const bigInt2 = BigInt("123456789012345678901234567890");

const res = "B" + "a" + (1 - "hello");
console.log(res); // "BaNaN"

const res2 = (true && 3) + "d";
console.log(res2); // "3d"

const res3 = Boolean(true && 3) + "d";
console.log(res3); // "trued"
