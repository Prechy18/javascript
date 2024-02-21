//pi
const pi = Math.PI;
console.log(pi);

//round off numbers
let roundedvalue = Math.round(9.4);
console.log(roundedvalue);

function roundoff(){
    let userInput = parseFloat(prompt("enter a decimal number"));
    document.getElementById("answer").innerText = Math.round(userInput);
}

// floor : rounds down
function rounddown(){
    let userInput = parseFloat(prompt("enter a decimal number"));
    document.getElementById("answers").innerText = Math.floor(userInput);
}

//ceil : round up
function roundup(){
    let userInput = parseFloat(prompt("enter a decimal number"));
    document.getElementById("answerss").innerText = Math.ceil(userInput);
}

// min
function findminvalue(){
 let userInput1 = parseFloat(prompt("enter first number"));
 let userInput2 = parseFloat(prompt("enter first second"));
 let userInput3 = parseFloat(prompt("enter first third"));
 let userInput4 = parseFloat(prompt("enter first fourth"));
 let userInput5 = parseFloat(prompt("enter first fifth"));
 let minimun = Math.min(userInput1, userInput2, userInput3, userInput4, userInput5);
 document.getElementById("output"). innerText = minimun
}

//MAX
function findmaxvalue(){
    let userInput1 = parseFloat(prompt("enter first number"));
    let userInput2 = parseFloat(prompt("enter first second"));
    let userInput3 = parseFloat(prompt("enter first third"));
    let userInput4 = parseFloat(prompt("enter first fourth"));
    let userInput5 = parseFloat(prompt("enter first fifth"));
    let maximun = Math.max(userInput1, userInput2, userInput3, userInput4, userInput5);
    document.getElementById("outputs"). innerText = maximun
   }   

   // random
   console.log(Math.floor(Math.random() * 10)); 
   