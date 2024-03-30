let openMenuIcon = document.querySelector(".bi-list");
let closeMenuIcon = document.querySelector(".bi-x-lg");
let mobileNav = document.querySelector(".mobile-nav");
let header = document.querySelector("header");

// when i click on  the menu icon
// open the mobile nav
// change openMenuIcon

openMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("hide");
});

closeMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("hide");
});

let prevScrollPos = window.scrollY;
console.log(prevScrollPos);
window.addEventListener("scroll", () => {
  let currentPos = window.scrollY;

  if (currentPos > prevScrollPos) {
    console.log("going down");
    header.classList.add("slide-up");
  } else {
    console.log("going up");
    header.classList.remove("slide-up");
  }

  prevScrollPos = currentPos;
});


// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a
// callback function with elements, index parameter and array itself.
// The index and the array optional.

const furnitures = ["Chairs", "Wardrobe", "Table"];

furnitures.forEach((furniture, index) => {
  console.log(furniture, index);
});

const titleBtns = document.querySelectorAll(".seamless-btn");
console.log(titleBtns);
let containers = document.querySelectorAll(".title-container");

titleBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    containers.forEach((container, index) => {
      container.classList.remove("show-box");
    });
    containers[index].classList.add("show-box");
  });
});

const items = ["laptop", "television", "keyboard", "mouse"];
const pluralitem = items.map((item, index) => {
  if(item == "television") return item + "s"
  return item;
  //or 
  // item == "television" ? item + "s" : item
});
console.log(pluralitem);

const students = [
  {
    name: "Micheal",
    score: 70,
  },
  {
    name: "David",
    score: 40,
  },
  {
    name: "Mary",
    score:60,
  },
  {
    name: "jane",
    score: 60
  },
  {
    name: "max",
    score: 20,
  },
  {
    name: "sam",
    score: 25,
  }, 
];

const newStudents = students.map(students =>{
if(students.score <50){
  students.score +=20;
  return students;
}
return students;
})
// to filter out the students less than 50
.filter((students) => students.score >= 50)
// to reduce the students array to 1 and add them all
.reduce((acc , cur) => acc + cur.score,0);
console.log("new", newStudents);

// let studentScore = students.map((students)=> {
// if(students.score <50){
//   students.score += 10;
//   return students;
// }
// return students;
// });
// console.log(studentScore);


const prices = [200, 300, 124, 500]
let total = prices.reduce((acc, cur) => acc + cur , 0)
console.log(total);


// find
let isFound = pricess.find((price) => price === 600);
console.log(isFound);

// findIndex
let itemIndex = pricess.findIndex((price) => price === 500);
console.log(itemIndex);

// findIndex
let some = pricess.every((price) => price > 500);
console.log(some);

// let modifiedStudent = students.map((student) => {
//   if (student.score < 50) {
//     student.score += 10;
//     return student;
//   }
//   return student;
// });

// console.log(modifiedStudent);

// filter
const nombas = [1, 2, 3, 4, 5];
const filteredNomba = nombas.filter((nomba) => nomba !== 3);
console.log(filteredNomba);

