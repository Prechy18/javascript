// strings
const firstname = "Micheal";
const lastname = "Jordan";
const country = "Nigeria";
const city = "Lagos";
const job = "Developer";
let age = 10;
age = 8;
// concatenation
// the string is to add space
// + is to add two variables together
const fullname = firstname + " " + lastname;
const statement = fullname + " is a basketballer he lives in" + " " + country;
console.log (fullname);
console.log(statement);

// template literal
const paragraph = `${fullname} is a "basketballer" he lives in ${country} he is ${age + 10} yearsold`;
console.log(paragraph);

// lenght of a string
const password = "password";
console.log(password.length);
const paragraphlength = paragraph.length;
console.log(paragraphlength);

//accessing the character of a string
const randoword = "Beautiful";
const firstletter = randoword[0];
const lastCharacter = randoword[randoword.length -1];
console.log(lastCharacter);

//methods of strings
//toupperCase()
const flower = "sunflower";
console.log(flower.toUpperCase());

//tolowercase()
const funiture = "TABLE";
console.log(funiture.toLowerCase());

//trial()
// trim is for removing trialing spaces before and after the lenght of the string
const fruit = " Lemon"
console.log(fruit.trim())

//include()
const language = "javascript";
console.log(language.includes("java"));

// replace()
const anotherStatment = "The height reduced and kept by great men were not attained by sudden flight but they while their companion slept were tolling upwards in the night"
console.log(anotherStatment.replace("by", "with"));

// charAt()
console.log(anotherStatment.charAt(5));

// school 
const acar = "Merceedes"
console.log(acar.indexOf("e"))

//lastindexof

// concat()
let learning = "72";
let hours = "hours";
console.log(learning.concat(hours, " of javascript"));

// slice
const compoundword = "Grandfather";
console.log(compoundword.slice(5,11));

// endswith
// startswith

// checking data types
console.log(typeof "cake");
console.log(typeof 30);
console.log(typeof compoundword);

// assignment 
const notion = "javascript is a friendly language";
document.getElementById("java").innerText = notion;
document.getElementById("len").innerText = notion.length;

function uppercase(){
document.getElementById("java").innerText = notion.toUpperCase();   
}

function lowercase(){
    document.getElementById("java").innerText = notion.toLowerCase();   
    }

function slicefirst(){
    document.getElementById("java").innerText = notion.slice(10);   
    }

function slicelast(){
    document.getElementById("java").innerText = notion.slice(0,10);   
    }

function index(){
        document.getElementById("java").innerText = notion.indexOf('n');   
        }

function random(){
        document.getElementById("ran").innerText = Math.floor(Math.random() * 51) + 50;   
}

function randomalpha(){
    const alpha = "javascript"
    document.getElementById("alpha").innerText = alpha.charAt (Math.floor(Math.random() * alpha.length));
}

