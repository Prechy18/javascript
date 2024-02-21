/*
A boolean data type represents one of the two values:true or false. Boolean 
value is either true or false. The use of these data types will be clear when you 
start the comparison operator. Any comparisons return a boolean value which is either 
true or false.
*/

// Example: Boolean Values

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

/* Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true
*/

/* Falsy values
0
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

// Operators
// Assignment operators
// =, +=, -=, *=, /= %=

let a = 3;
let b = 2;

// Arithmetic operator
// Addition(+), Subtraction(-), Multiplication(), Division(/), Modulus(%), Exponential(*)

let numOne = 3
let numTwo = 4
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf);

// comparison Operators
// >, <, >=, <=, ==, ===, !=, !==

console.log(3 > 2)              
console.log(3 >= 2)            
console.log(3 < 2)              
console.log(2 < 3)              
console.log(2 <= 3)             
console.log(3 == 2)             
console.log(3 != 2)             
console.log(3 == '3')           
console.log(3 === '3')          
console.log(3 !== '3')          
console.log(3 != 3)             
console.log(3 !== 3)            
console.log(0 == false)         
console.log(0 === false)        
console.log(0 == '')            
console.log(0 == ' ')           
console.log(0 === '')           
console.log(1 == true)          
console.log(1 === true)         
console.log(undefined == null)  
console.log(undefined === null) 

console.log('mango'.length == 'avocado'.length)  
console.log('mango'.length != 'avocado'.length)  
console.log('mango'.length < 'avocado'.length)   
console.log('milk'.length == 'meat'.length)      
console.log('milk'.length != 'meat'.length)      
console.log('tomato'.length == 'potato'.length)  
console.log('python'.length > 'dragon'.length)   

// Logical operator
// 1. OR operator (||) 
let boolOne = true;
let boolTwo = 0;
let result  = !(boolOne && !boolTwo) ;
console.log(result);

// 2. AND operator (&&)
// 3. NOT operator (!)

// Increment operator
// pre-increment, post-increment

let count = 5;
let output =count--;
console.log(output, count);

// Decrement Operator
// pre-decrement, post-decrement

// Ternary Operator 
let isDay = true;
isDay ? true : false;
isDay ? console.log("It is day") : console.log("It is night");
let usersResponse = confirm("Are you sure you want to delete this item");
usersResponse ? console.log("You clicked Ok") : console.log("You clicked cancel");