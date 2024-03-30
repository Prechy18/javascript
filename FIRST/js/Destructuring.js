// Destructuring

/*
Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

*/

// Destructing Arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

// We can use default value in case the value of array for that index is undefined

const names1 = [undefined, "Brook", "David"];
let [
  firstPerson1 = "Asabeneh",
  secondPerson1,
  thirdPerson1,
  fourthPerson1 = "John",
] = names1;

console.log(firstPerson1, secondPerson1, thirdPerson1, fourthPerson1);

// We can not assign variable to all the elements in the array. We can destructure few of the
// first and we can get the remaining as array using rest operator(...).{

const nombas = [1, 2, 3, 4, 56, 76, 8, 8];
const [one, two, ...rest] = nombas;

// spread
const newNombas = [...rest];

// Destructuring Object
// When we destructure the name of the variable we use to destructure should
// be exactly the same as the key or property of the object. See the example below.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

// Renaming during structuring
const rectangle1 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle1;

console.log(w, h, a, p);

// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

// Spread operator to copy object
// We can copy an object using a spread operator

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user, age: 20, name: "new name" };
console.log(copiedUser);

//,
