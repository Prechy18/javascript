// to change a text 
// document.querySelector(".message").textContent = "correct guess..."
// we would do the same for the ? box and for score
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent =14;
// when somthing is written in the input it shows in the console
// console.log(document.querySelector(".Guess").value);

let randomNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;


document.querySelector(".check").addEventListener('click', function(){
const input = Number(document.querySelector(".Guess").value);
console.log(input, typeof input);
// When there is no input
if(!input){
    document.querySelector(".message").textContent = "No number"
}
//  when the player guess the right number
else if(input == randomNumber){
    document.querySelector(".message").textContent = "Correct Number🎉";
    score = score + 2
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#056505"
    document.querySelector(".number").textContent = randomNumber;
    if(score > highScore){
        highScore = score;      
        document.querySelector(".highscore").textContent = highScore
    }
}
// when the player guess a wrong number higher than the number
else if(input > randomNumber){
    document.querySelector(".message").textContent = "too high";
    score = score - 1
    document.querySelector(".score").textContent = score;           
    document.querySelector("body").style.backgroundColor = "#800f0f" 
}
// when the player guess a wrong number lower than the number
else if(input < randomNumber){
    document.querySelector(".message").textContent = "too low";
    score = score - 1
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#800f0f"
}
})
//  for the again button
  document.querySelector(".again").addEventListener('click' , function(){
  score = 20
  randomNumber = Math.trunc(Math.random() * 20) +1;  
  document.querySelector(".score").textContent =  score;
  document.querySelector(".message").textContent = "start guessing...."
  document.querySelector("body").style.backgroundColor = "#030735"
  document.querySelector(".number").textContent = "?"
  document.querySelector(".Guess").value = ""
});


// let randomNumber = Math.trunc(Math.random() * 20) +1;
// let score = 20;
// let highScore = 0;
// const DisplayMessage = function(message){
//     document.querySelector(".message").textContent = message
// }
// const displayScore = function(Score){
//     document.querySelector(".score").textContent = Score
// }

// const displayNumber = function(Number){
//     document.querySelector(".number").textContent = Number
// }

// document.querySelector(".check").addEventListener('click', function(){
// const input = Number(document.querySelector(".Guess").value);
// console.log(input, typeof input);
// // When there is no input
// if(!input){
//     DisplayMessage ("No number") 
// }
// //  when the player guess the right number
// else if(input == randomNumber){
//     DisplayMessage("Correct Number🎉");
//     score = score + 2
//     displayScore(score)
//     displayNumber(randomNumber)
//     document.querySelector("body").style.backgroundColor = "#056505"
//     if(score > highScore){
//         highScore = score;
//         document.querySelector(".highscore").textContent = highScore
//     }
// }
// // when the player guess i wrong 
// else if(input !== randomNumber){
//     score = score - 1
//     DisplayMessage( input > randomNumber? "Too High" : "Too Low");
//     displayScore(score)
//     document.querySelector("body").style.backgroundColor = "#800f0f"
// }

// })
// //  for the again button
//   document.querySelector(".again").addEventListener('click' , function(){
//   score = 20 
//   randomNumber = Math.trunc(Math.random() * 20) +1;  
//   document.querySelector("body").style.backgroundColor = "#030735"
//   document.querySelector(".Guess").value = ""
//   displayScore(score)
//   DisplayMessage("start guessing....")
//   displayNumber("?")
// })