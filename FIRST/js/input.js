// alert("script in the body");
// DOM
// console.log(document.getElementById("first").id)

// console.log(document.getElementById("place").placeholder)

// document.getElementById("first").innerHTML = "Welcome to javascript class"
// document.getElementById("second_heading").innertext = "Hello are u there"
// document.getElementById("third").textContent = "This is a paragraph"
// document.getElementById("second").value = "Precious"

//data
// categories of data types
// 1. prinitive data types
// 2. non.prinitive data types

// Examples of printive data types
// 1. number : (positive and negative integers)- basically means any number 10, -5, 0, 2, 20.5
// 2. string: 'boy', "international", "50"
// 3. boolman: true / false
// 4. undefined: undefined (basically means there is no value there or you haven't define the value)
// 5. null: empty

// Examples of non-prinitive
// 1. arrays
// 2. objects
// 3. functions

//variables
// ways to declare variable in javascript
// var, conit, let

// this is a declaration of variable (before you can use a variable, you need to declare it)
var numberofstudents;

//initlallzation (this is declaration and assignment)
var numberofstudents = 10;
var firstname = "Precious"
var isEmployed = true;
var numberoffruits = undefined;
var accountnumber = null;


//assignment

// 1.number
var animals = 30
var basketballteam = 5
var age = 40
var mathscore = 90
var numberofcards = 20

// 2.strings
var myname = "precious"
var school = "aptech"
var colour = "black"
var food = "none"
var email = "example@gmail.com"

// 3.boolman
var crazy = false
var sleep = true
var understand = true
var good = true 
var cry = false

// 4.undefined
var numberofstudents = undefined;
var firstname = undefined;
var isEmployed = undefined;
var numberoffruits = undefined;
var accountnumber = undefined;

// 5.null
var numberofstudents = null;
var firstname = null;
var isEmployed = null;
var numberoffruits = null;
var accountnumber = null;


// ES 6 - ECMA SCRIPT 2015

const gravity = 10; 
// let age = 20; // initialization
// age = 22; // re-assignment
// after one year
const mass = 50;
// after 100 lines of code
// gravity = 12; not allowed a constant variable
const weight = gravity * mass;
console.log(weight, mass);


let name; // undefined
let lastname = undefined;
let bucket = null; // empty

// non-primitive examples
// 1. arrays
const cars = ["Lexus", "Toyota", "Honda", "Mercedes", "Mazda"];
// array indexing
console.log(cars);
// accessing elements of an array
let hondaCar = cars[2];
console.log(hondaCar);
// re-assinging element of an array
cars[5] = "Acura";
console.log(cars);

// 2. Objects
let student = {
    firstname: "Dollars",
    studentId: "Student15263732",
    javascriptScore: 80,
    isMale: true,
    noOfCarryOver: null,
    maritalStatus: undefined,
    talk: function(){
       return "Talking..."
    },
    eat(){
        console.log("eating...")
    }
}

// after many lines of code

console.log(student.firstname);
console.log(student.javascriptScore);
console.log(student.talk());

// assignment
let person = {
    firstname: "Precious",
    studentId: "Student15263732",
    javascriptScore: 90,
    isMale: false,
    noOfCarryOver: null,
    maritalStatus: undefined,
    talk: function(){
       return "Talking..."
    },
    eat(){
        console.log("eating...")
    }
}

document.getElementById("firstname"). innerText = person.firstname;
document.getElementById("student_Id"). innerText = person.studentId;
document.getElementById("score"). innerText = person.javascriptScore;
document.getElementById("gender"). innerText = person.isMale;


 

// after many lines of code
// document.write(person.firstname);
// document.write(person.studentId);
// document.write(person.isMale);
// document.write(person.javascriptScore);
// document.write(person.talk());


const vehicle = [
   "lexus", "toyota", "honda", "mercedes", "mazda"
]
document.write(vehicle);


// 3.Functions
 // function triggers action

// function declaration
 function greet(){
    console.log("This shows on the console")
 }
function show(){
    document.write("This shows on the document")
 }

 //function calling
 //this is to call the functions so that they would work
 greet()
 show()

 // every method is a function buh not all functions are method
 // example of method :- log, alert, write
 // a method is a function inside an object
 // a function that's not attached to an object is a method

 function showName(){
    document.getElementById("name").innerText = "Precious";

 }
 function hideName(){
    document.getElementById("name").innerText = null;

 }

 function urcountry(){
 let country = prompt("enter your country" , "Nigeria");
document.getElementById("country").innerText = country
 }

 function changeImage(target, url){
    target.src = url
 }

 