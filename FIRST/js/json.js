// JSON
/*
 JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation 
 syntax, but the JSON format is text or string only. JSON is a light weight data format for storing and 
 transporting. JSON is mostly used when data is sent from a server to a client. 
 JSON is an easier-to-use alternative to XML.
*/

const usersText = `
{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }
`

/*
The above JSON example is not much different from a normal object. Then, what is the difference ?
 The difference is the key of a JSON object should be with double quotes or it should be a string. 
 JavaScript Object and JSON are very similar that we can change JSON to Object and Object to JSON.
*/

// converting JSON to javascript object
/*
Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we
 can change to Object for sake of demonstration. In JavaScript the keyword JSON has parse() and stringify() 
 methods. When we want to change the JSON to an object we parse the JSON using JSON.parse(). When we want to
  change the object to JSON we use JSON.stringify().


*/

const usersObj = JSON.parse(usersText)
console.log(usersObj);

//Converting Object to JSON
/*
When we want to change the object to JSON we use JSON.stringify(). The stringify method takes one 
required parameter and two optional parameters. The replacer is used as filter and the space is an 
indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.
*/

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  const txt = JSON.stringify(users);
  console.log(txt);


 