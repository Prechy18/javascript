// for (let i = 1; i <= 2000; i++) {
//     console.log("Welcome to javascript class", i);
    
// }

// for (let i = 700; i>330; i--) {
//     console.log("Hello", i);
    
// }

let cardWrapper = document.getElementById("card-wrapper");
for (let card = 1; card <= 100; card++) {
    if (card % 2==0) {
    cardWrapper.innerHTML += `<li style="background-color:#87cefa;" class= "card">${card}</li>`; 
        
    }
    else{
    cardWrapper.innerHTML += `<li style="background-color: #971212;" class= "card">${card}</li>`; 
    }
}
let productContainer = document.getElementById("product-container")

const product = [
    {
        id: "prod-" + Math.random() * 1000,
        img: "FIRST/image/images.jpeg",
        label: "Dogs",
        price: "$200",
    },

    {
        id: "prod-" + Math.random() * 1000,
        img: "FIRST/image/dog1.jpeg",
        label: "Dogs",
        price: "$200",
    },
    
    {
        id: "prod-" + Math.random() * 1000,
        img: "FIRST/image/dog2.jpg",
        label: "Dogs",
        price: "$200",
    },
    
    {
        id: "prod-" + Math.random() * 1000,
        img: "FIRST/image/dog3.jpeg",
        label: "Dogs",
        price: "$200",
    },
    
];

for (let i = 0; i < 4; i++){
    productContainer.innerHTML +=`
    <div class="product">
     <div>
        <img src=${product[i].img} alt="">
     </div>
        <div class="product-details">
            <h2 style="text-align: center;">${product[i].label}</h2>
            <div class="price-details">
              <p style="margin-left: 3px;">${product[1].price}</p>
              <button id=${product[i].id} onclick="addToCart('${i}')"class="cart">Add to cart</button>
            </div>
        </div>
    </div>
`;
}


let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}

// let username = prompt("Enter your name");
// while (username == null) {
//   username = prompt("Enter your name");
// }


// let username = null;
// do {
//   username = prompt("Enter your name");
// } while (username == null);
// console.log(username);

// =================== MONDAY ================
// for of loop // special loop for array
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

let sum = 0;
for (const num of numbers) {
  sum = sum + num;
}
console.log(sum); // 15

// break : Break is used to interrupt a loop.
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// continue: We use the keyword continue to skip a certain iterations.
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Assignment
/*
1. Iterate 0 to 10 using for loop, do the same using while and do while loop

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

3. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

for(let i = 0; i <= 10; i++){
  console.log(${i} x ${i} = ${i * i});
}

4. print the multiplication table for the users input

5. Use for loop to iterate from 0 to 100 and print only even numbers

6. Use for loop to iterate from 0 to 100 and print only odd numbers

7. Use for loop to iterate from 0 to 100 and print only prime numbers

8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0;
for(let a = 0; a <= 100; a++){
   if(a % 2 === 0){
    evenSum += a;
   } else {
    oddSum += a
   }
}

console.log(evenSum, oddSum);

10. Develop a small script which generate array of 5 random numbers

11.Develop a small script which generate array of 5 random numbers and 
the numbers must be unique

12. Develop a small script which generate a six characters random id:

13. Write a script which generates a random hexadecimal number.


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

14. Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
15. Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/

// assignment answers
// 1- for loop
const numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(const nu of numb) {
    console.log(nu);
}

// while loop
let n = 0;
while (n <= 10) {
  console.log(n);
  n++;
}

// do while loop
let numeric = 0;
do {
  console.log(numeric);
  numeric++
} while (numeric <= 10);


// 2- for loop
const less = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

for(const le of less){
  console.log(le);
}

// while loop
// let p = 20;
// while (p <= 10){
//   console.log(p);
//   p++;
// }

// do whileloop

// 3. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100


let num = 0;
for(p = 0; p<=10; p++){
  console.log(`${num} x ${p} = ${num*p}`);
  num<=10; num++
}


// 4. print the multiplication table for the users input
let input = prompt("enter a number")
for(r = 0; r<=10; r++){
  console.log(`${input} x ${r} = ${input*r}`);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
let even = 0
for(e = 0; e<=100; e++){
  if(e % 2==0){
    console.log(e);
  }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
let odd = 0
for(o = 0; o<=100; o++){
  if(o % 2!=0){
    console.log(o);
  }
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
// let prime = 0
// for(pr = 0; pr<=100; pr++){
//   if(pr % 1==0){
//     console.log(pr);
//   }
// }

// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
const numm = 100
let sumall = 0;
for(su = 0; su <=numm; su++){
  sumall = sumall + su;
}
console.log(sumall);


// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0;
for(let a = 0; a <= 100; a++){
   if(a % 2 === 0){
    evenSum += a;
   } else {
    oddSum += a
   }
}
console.log(evenSum, oddSum);

// 10. Develop a small script which generate array of 5 random numbers

const array = Array.from({ length: 5 }, () => parseInt(Math.random() * 20));
console.log(array);

// 12. Develop a small script which generate a six characters random id:
let characters = "abcdefghijklmnopqrstuvwxyz0123456789"
let randomid;

for(let c = 0; c <0; c++){
 let randomNum= Math.floor(Math.random() * characters.length)
 let selectedCharacter = characters(randomNum);
 randomid += selectedCharacter;
}

console.log(randomid);

// 14
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const modifiedCountries = [];

for (let i = 0; i < countries.length; i++) {
  let country = countries[i];
  let countryAbbr = countries[i].slice(0, 3).toUpperCase();
  let countryLength = countries[i].length;

  modifiedCountries.push([country, countryAbbr, countryLength]);
}

console.log(modifiedCountries);

