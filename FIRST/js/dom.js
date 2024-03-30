// What is DOM
console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.documentURI);

// mouse event
let one = document.querySelector(".click");
let two = document.querySelector(".contextmenu");
let three = document.querySelector(".dblclick");
let four = document.querySelector(".mousedown");
let five = document.querySelector(".mouseenter");
let six = document.querySelector(".mouseleave");
let seven = document.querySelector(".mousemove");
let eight = document.querySelector(".mouseout");
let nine = document.querySelector(".mouseover");
let ten = document.querySelector(".mouseup");

one.addEventListener("click", () => {
  one.classList.toggle("red");
});

two.addEventListener("contextmenu", () => {
  two.classList.toggle("blue");
});

three.addEventListener("dblclick", () => {
  three.classList.toggle("teal");
});

four.addEventListener("mousedown", () => {
  four.classList.toggle("steelblue");
});

five.addEventListener("mouseenter", () => {
  five.classList.toggle("orange");
});

six.addEventListener("mouseleave", () => {
  six.classList.toggle("purple");
});

seven.addEventListener("mousemove", () => {
  seven.classList.toggle("pink");
});

eight.addEventListener("mouseout", () => {
  eight.classList.toggle("crimson");
});

nine.addEventListener("mouseover", () => {
  nine.classList.toggle("chocolate");
});

ten.addEventListener("mouseup", () => {
  ten.classList.toggle("aqua");
});

const input = document.querySelector("#text-input");

// ------ Keyboard event -------------------
// ------- USEFULL PROPERTIES AND METHODS -------
input.addEventListener("keypress", (e) => {
  console.log(e.charCode);
  console.log(e.code);
  console.log(e.ctrlKey); // hit ctr + q
  console.log(e.key);
  console.log(e.shiftKey); // shift + t
});

let searchBtn = document.getElementById("search-btn");
let searchInput = document.getElementById("search");

searchBtn.addEventListener("click", () => {
  console.log("searched result for " + searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
  if (e.code == "Enter")
    console.log("searched result for " + searchInput.value);
});

// ************ DOM SELECTORS ************
// 1. getElementsByTagName
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);
// 2. getElementById
console.log(document.getElementById("main"));
// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));
// 4. querySelector
console.log(document.querySelector("#id-1"));
// 5. querySelectorAll
console.log(document.querySelectorAll("li"));

// ---------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);

// ************ CLASSLIST ************
// add()
// remove()
// toggle()
// contain()

// *********** Getting and Setting Attribute ***********

// *********** Siblings **************************
// parentElelemt
// children
// nextElementSibling
// previousElememtSibling

let hideBtn = document.querySelector(".hide-btn");
let showBtn = document.querySelector(".show-btn");
let box = document.querySelector(".box");

hideBtn.addEventListener("click", () => {
  box.classList.add("hide-box");
});

showBtn.addEventListener("click", () => {
  box.classList.remove("hide-box");
});