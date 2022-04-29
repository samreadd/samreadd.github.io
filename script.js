/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let randNum = getRandomIntInclusive(1, 20); //start w Rand #
console.log(randNum);
let messageObj = document.querySelector(".message");

let highscore = 0;
let score = 20; // GLOBAL variable (accessible by all functions)
let scoreObj = document.querySelector(".score");

function check() {
  let guess = Number(document.querySelector(".guess").value);
  if (guess === randNum) {
    //alert('win')
    messageObj.textContent = "You win!";
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = randNum;
    if (score > highscore){
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < randNum) {
    //alert('too low')
    messageObj.textContent = "Too low. Guess Again";
    score -= 1;
    scoreObj.textContent = score;
  } else if (guess > randNum) {
    //alert('too high')
    messageObj.textContent = "Too high. Guess Again";
    score -= 1;
    scoreObj.textContent = score;
  }
}
function again() {
  document.body.style.backgroundColor = "#222"
  randNum = getRandomIntInclusive(1, 20)
  curScore = 20
  score.textContent = curScore
  numObj.textContent = '?';
  messageObj.textContent = "Start Guessing!"
  guessObj.value = '0'
  //recalculate randNum

  //background back to black
  
  //change number box to ?
  //change variable score message to 20
  //message start guessing
  //change guess box back to 0
}
//document.querySelector()
