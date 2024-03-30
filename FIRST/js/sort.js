// sort
// sort: The sort methods arranges the array elements either ascending or descending order. By default,
// the sort() method sorts values as strings.This works well for string array items but not for
// numbers. If number values are sorted as strings and it give us wrong result.
// Sort method modify the original array. It is recommended to copy the original data before
// you start using sort method.

// Sorting string value
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

// Sorting Numeric values
// As you can see in the example below, 100 came first after sorted in ascending order. Sort converts
// items to string , since '100' and other numbers compared, 1 which the beginning of the string '100'
//became the smallest. To avoid this, we use a compare call back function inside the sort method,
// which return a negative 1, zero or positive 1.

// 1. you can directly sort in ascending or descending order return a - b or vice versa
// 2. when working with array of object, you directly make comparison to check if any key is less than
// or greater than one another
// for less than you return -1
// for greater than you return 1
// otherwise return 0

const nums = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(nums.sort()); //[100, 3.14, 37, 9.81]
nums.sort(function (a, b) {
  return a - b; // ascending order
});

console.log(nums); // [3.14, 9.81, 37, 100]

nums.sort(function (a, b) {
  return b - a; // descending order
});
console.log(nums); //[100, 37, 9.81, 3.14]

// Sorting Object Arrays
// Whenever we sort objects in an array, we use the object key to compare.

// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1;
//   if (a.key > b.key) return 1;
//   return 0;
// });

// exercise
// sort this users age in ascending order
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "aaron", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});

console.log(users);

let list = document.querySelector(".list");
let nameBtn = document.querySelector("#btn-name");

let newUsers = users
  .map((user) => {
    return `<div>
    <span>${user.name}</span>
    <span>${user.age}</span>
  </div>`;
  })
  .join("");

list.innerHTML = newUsers;

users.sort((a, b) => {
  fa = a.name.toLowerCase();
  fb = b.name.toLowerCase();
  if (fa < fb) return -1;
  if (fa > fb) return 1;
  return 0;
});

nameBtn.addEventListener("click", () => {
  newUsers = users
    .map((user) => {
      return `<div>
      <span>${user.name}</span>
      <span>${user.age}</span>
    </div>`;
    })
    .join("");

  list.innerHTML = newUsers;
});