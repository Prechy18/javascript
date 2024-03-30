// CONDITIONALS
/*
Conditional statements are used for make decisions based on different conditions. By default , statements 
in JavaScript script executed sequentially from top to bottom. If the processing logic require so, the 
sequential flow of execution can be altered in two ways:

1. Conditional execution: a block of one or more statements will be executed if a certain expression is true
2. Repetitive execution: a block of one or more statements will be repetitively executed as long as a certain 
expression is true. In this section, we will cover if, else , else if statements. The comparison and logical 
operators we learned in the previous sections will be useful in here.


Conditions can be implementing using the following ways:

if
if else
if else if else
switch
ternary operator
*/

// if statement
// a number test case example

let number = 10;
if (number > 10 || number == 10) {
  console.log(`${number} is equal to  10`);
}
console.log("program continues");

// if else statement
// a number test case (logical operator with modulus)
// darkMode

let isDay = true;
if (!isDay) {
  console.log("It is day");
} else {
  console.log("It is night");
}

// example 2
let ageTag = document.getElementById("age");
let age = 18;
ageTag.innerText = age;

if (age <= 0) ageTag.style.color = "red";
else ageTag.style.color = "green";

// if else if else
// users form registration
// Credit debit app

let password = "precious";

//chekc if it is empty
if (password == "") {
  console.log("Password cannot be empty");
} else if (password.length < 8) {
  console.log("Password has to be 8 characters or more");
} else if (password.length >= 12) {
  console.log("Password too long");
} else {
  console.log("Valid password");
}

// switch

// Assignment
/*
1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:
'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years 
he needs to turn 18.

2. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.

3. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number 
is even or not using JavaScript?

Level 2:
Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

4. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

5. Check if a day is weekend day or a working day. Your script will take day as an input.

Level 3: 
6. Write a program which tells the number of days in a month.

*/

// switch 

let day = "monday"

switch(day.toLowerCase()){
    case "sunday":
    console.log("alarm rings at 5am");
    break;
    case "monday":
    console.log("alarm rings at 8am");
    break;
    case "tuesday":
    console.log("alarm rings at 2am");
    break;
    case "wednesday":
    console.log("alarm rings at 1am");
    break;
    case "thursday":
    console.log("alarm rings at 9am");
    break;
    case "friday":
    console.log("alarm rings at 3am");
    break;
    case "saturday":
    console.log("alarm rings at 6am");

    default:
        console.log("please enter a valid day");
}