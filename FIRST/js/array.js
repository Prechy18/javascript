// how to create an array

// Array constructor

// const numbers = Array(6).fill(4);

// array literals
const numbers = [6, 10, 14, 20, 24, 4];
console.log(numbers);

// modifying array Element
numbers[0] = 12;
numbers[2] = 16;
console.log(numbers);
// length of an array
console.log(numbers.length);

// Methods to manipulate array
// 1. concat
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
const thirdArr = firstArr.concat(secondArr);
console.log(thirdArr);

// 2. indexOf: To check if an item exist in an array. If it exists it returns the index else it returns -1.
const fruits = ["Banana", "Pawpaw", "Orange"];
const evenNumbers = [4, 6, 8];
console.log(fruits.indexOf("pawpaw"));
console.log(evenNumbers.indexOf(8));

// 3. lastIndexOf: works exactly as index of but returns the last occurrence

// 4. includes
console.log(fruits.includes("pawpaw"));
// 5. Array.isArray
console.log(Array.isArray(fruits));

// 6. toString
console.log(fruits.toString());
// 7. join
console.log(fruits.join("+"));
// 8. slice
console.log(fruits.slice(0, 2));
// 9. splice: splice deletes and can add an element to an array it affects the valu o the array
console.log(fruits.splice(0, 1, "Coconut"));
console.log(fruits);
// 10. push :  adding a new item at the end of the array
console.log(fruits.push("Waterlemon"));
console.log(fruits);
// pop is not commonly used, as there are other better alternatives like splice
// 11. pop: removes the last item of an array
console.log(fruits.pop());
console.log(fruits);
// avoid using shift and unshift as splice is a better method
// 12. shift: remove an item from the beginning
console.log(fruits.shift());
// 13. unshift
console.log(fruits.shift("Coconut"));
// 14. reverse
console.log(fruits.reverse());
// 15. sort
console.log(fruits.sort());

// Assignment one
// In the following shopping cart add, remove, edit items

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

// Assignment two
// searching item
// The user search for a number in the array using the input field,
// if the number is in the array, it returns the index, otherwise, number not found
// let num = [20, 45, 87, 2, 56, 24, 44];

let shoppingList = document.getElementById("shopping-list");
shoppingList.innerText = shoppingCart;
function meat(){
    if (!shoppingCart.includes("Meat")) {
        shoppingCart.unshift("Meat");
        document.getElementById("shopping-list").innerText = (shoppingCart);
    }
    else{
       alert("Meat is already added")
    }
}

//or 
// function meat(){
    // if(shoppingCart.includes("meat")){
    //    alert("Meat is already added")   
    // }
    // else{
    //     shoppingCart.splice(0, 0, "Meat");
    //     document.getElementById("shopping-list").innerText = (shoppingCart);
    // }

// }

function sugar(){
    if (!shoppingCart.includes("Sugar")) {
        shoppingCart.push("Sugar");
        document.getElementById("shopping-list").innerText = (shoppingCart);
    }
    else{
       alert("Sugar is already added")
    }
}

function honey(){
    let index = shoppingCart.indexOf("Honey")
    shoppingCart.splice(index, 1);
    document.getElementById("shopping-list").innerText = (shoppingCart);   
}

function Greentea(){
    shoppingCart.splice(2,1, "Greentea")
    document.getElementById("shopping-list").innerText = (shoppingCart);   
}

let num = [20, 45, 87, 2, 56, 24, 44];
function searchnum(){
let inputnumber = parseInt(document.getElementById("search").value)
let index = num.indexOf(inputnumber);
if (index !== -1) {
    alert("Number found at index: " + index);
}
else {
    alert("Number not found");
}
}
