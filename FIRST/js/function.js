/*
======= fUNCTIONS =================
A function is a reusable block of code or programming statements designed to perform a certain task. 
A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses 
can take a parameter. If a function take a parameter it will be called with argument. A function can also take 
a default parameter. To store a data to a function, a function has to return certain data types. 
To get the value we call or invoke a function. Function makes code:

clean and easy to read
reusable
easy to test

A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
*/

// Function Declaration
//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName(); // calling function by its name and with parentheses
  
  // Function without a parameter and return
  function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
  }
  
  square();
  
  function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;
  
    console.log(sum);
  }
  
  addTwoNumbers();
  
  // Function returning value
  
  // Function with a parameter
  function squares(number) {
    return number * number;
  }
  
  console.log(squares(10));
  
  // Function with two parameters
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo;
    return sum;
  }
 
  // Function with many parameters
  function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
  //calling a function
  console.log(sumArrayValues(numbers));
  
  //   Anonymous Function
  //   Anonymous function or without name
  
  const anonymousFun = function () { 
    console.log(
      "I am an anonymous function and my value is stored in anonymousFun"
    );
  };
  
  /// Expression Function
  // Expression functions are anonymous functions. After we create a function without a name
  //and we assign it to a variable. To return a value from the function we should call the variable
  
  // Function expression
  const squaress = function (n) {
    return n * n;
  };
  
  console.log(squaress(2));
  
  //   Arrow Function
  // Arrow function is an alternative to write a function, however function declaration and
  // arrow function have some minor differences.
  // Arrow function uses arrow instead of the keyword function to declare a function.
  // Let us see both function declaration and arrow function.
  
  // This is how we write normal or declaration function
  // Let us change this declaration function to an arrow function
  function squaree(n) {
    return n * n;
  }
  
  console.log(squaree(2)); // 4
  
  const squar = (n) => n * n;
  
  console.log(squar(2)); // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const squa = (n) => n * n; // -> 4
  
  //   Function with default parameters
  function greetings(name = "Peter") {
    let message = `${name}, welcome to 30 Days Of JavaScript!`;
    return message;
  }
  
  
  /*
     Assignment
     bonus
     1. Declare a function addNumbers and it takes two parameters and it returns sum.
     2.  Declare a function name reverseArray. It takes array as a parameter and it returns the 
     reverse of the array 
     3. Declare a function name capitalizeArray. It takes array as a parameter and it returns 
     the - capitalizedarray.
     4. Declare a function name addItem. It takes an item parameter and it returns an array after 
     adding the item
     5. Declare a function name removeItem. It takes an index parameter and it returns an array
      after removing an item
     6. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the
      numbers in that range.
     7. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
     8. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range
     9. Declare a function name evensAndOdds . It takes a positive integer as parameter and it 
     counts number of evens and odds in the number.
  
     level 2: 
     1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter 
     but it takes two inputs using prompt(). One of the input is the number of characters 
     and the second input is the number of ids which are supposed to be generated.
     2. Write a function generateColors which can generate any number of hexa or rgb colors.hriogbhhrhripgrhrwhinorrbgrbirpogbrporpo
     3. Call your function shuffleArray, it takes an array as a parameter and it 
     returns a shuffled array
  
    */

     //Assignment
   // 1.
     function addNumber(numb , numb2) {
      let sums = numb + numb2
      return sums;
     }
     console.log(addNumber(3,6));

     // 2.
     const array = [2, 4, 6, 8, 10]
     let newArray= []

     function ReverseArrays(arry, newArray){
        for(let r = arry.lenght - 1; r >= 0; r--){
               arry[r]
               newArray.push(arry[r])
        }
      }
       

     //3. 
     function capitalizeArray(Array){
      let array = 0
      for(let c=0; c<array.length; c++){
        array = array + Array[c]
      }
      return capitalizeArray(array)
     }


     // 7.
     function sumOfOdds(number) {
      let sum = 0
      for(let o = number; o>=0; o--){
        if(o % 2==1){
          sum +=1
        }
      }
      return sum;
     }

     // Classes
/*
JavaScript is an object oriented programming language. Everything in JavScript is an object, 
with its properties and methods. We create class to create an object. A Class is like an 
object constructor, or a "blueprint" for creating objects. We instantiate a class to create 
an object. The class defines attributes and the behavior of the object, while the object, 
on the other hand, represents the class.

Once we create a class we can create object from it whenever we want. Creating an object 
from a class is called class instantiation.

*/

// Defining a class
class Person {
    // class constructor
    constructor(firstName, lastName, age, country, city) {
      console.log(this); // check the output from here
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
    }
  
    // class method
    getFullName() {
      const fullName = this.firstName + " " + this.lastName;
      return fullName;
    }
  
    // static Method
    static favoriteSkill() {
      const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
      const index = Math.floor(Math.random() * skills.length);
      return skills[index];
    }
    static showDateTime() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      let dateMonthYear = date + "." + month + "." + year;
      let time = hours + ":" + minutes;
      let fullTime = dateMonthYear + " " + time;
      return fullTime;
    }
  }
  
  let todaysTime = Person.showDateTime();
  console.log("today's time", todaysTime);
  
  // Class Constructor
  // Class Constructor
  // The constructor is a builtin function which allows as to create a blueprint for our object.
  // The constructor function starts with a keyword constructor followed by a parenthesis.
  // Inside the parenthesis we pass the properties of the object as parameter. We use the
  // this keyword to attach the constructor parameters with the class.
  
  // The following Person class constructor has firstName and lastName property.
  //These properties are attached to the Person class using this keyword. This refers to
  // the class itself.
  
  // class Instantiation : creating an object from a class
  const person1 = new Person("Asabeneh", "Yetayeh");
  
  console.log(person1);
  
  // Static method
  //  The static keyword defines a static method for a class. Static methods are not called
  // on instances of the class. Instead, they are called on the class itself. These are often
  // utility functions, such as functions to create or clone objects. An example of static
  // method is Date.now(). The now method is called directly from the class.
  
  // Inheritance
  // Using inheritance we can access all the properties and the methods of the parent class.
  // This reduces repetition of code. If you remember, we have a Person parent class and we
  // will create children from it. Our children class could be student, teach etc.
  
  // Let us create a Student child class from Person parent class.
  
  class Student extends Person {
    saySomething() {
      console.log("I am a child of the person class");
    }
  }
  
  const s1 = new Student("Chidera", "Sharon", 20, "Nigeria", "Lagos");
  console.log(s1);
  console.log(s1.saySomething());
  console.log(s1.getFullName());