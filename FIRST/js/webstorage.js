// HTML web storage provides two objects for storing data on the client:

// window.localStorage - stores data with no expiration date
// window.sessionStorage - stores data for one session (data is lost when the browser tab is
//closed)Most modern browsers support Web Storage, however it is good to check browser support
// for localStorage and sessionStorage.

// available methods for the Web Storage objects.
// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

// Check if localStorage is supported by the browser
if (typeof Storage !== "undefined") {
    // Accessing and storing data in localStorage
    localStorage.setItem("username", "John");
    localStorage.setItem("age", "30");
  
    // Retrieving data from localStorage
    const username = localStorage.getItem("username");
    const age = localStorage.getItem("age");
  
    // Output the retrieved data
    console.log("Username:", username);
    console.log("Age:", age);
  
    // Removing data from localStorage
    //localStorage.removeItem("age");
  
    // Output after removing data
    const removedAge = localStorage.getItem("age");
    console.log("Removed Age:", removedAge); // Output: null
  } else {
    console.log("Sorry, your browser does not support Web Storage...");
  }