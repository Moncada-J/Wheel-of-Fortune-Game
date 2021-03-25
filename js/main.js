// ----------> VARIABLES < ---------
// create and assign constant (non changing) variables such as:
//  number values within wheel & game play audio.

const s0pinAudio = new Audio("https://voca.ro/1hPceoBTH0Xk");

// ----------->  GAME STATE  <------------
// define the variables which are apart of the game state such as:
// results, if player is a winner, how much the player has won or lost at the end.

// --------------> ELEMENTS MANIPULATED  <---------------
// based off game results, the modification of html elements such as:
// player name, winner etc.
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let credits = 500;
const creditEl = document.getElementById("credit-box");
const cTitleEl = document.getElementById("cTitle");

// html elements
const wheelEl = document.querySelector(".wheel");
const valueEl = document.getElementById("value");
const spinBtnEl = document.querySelector("#spin");
const pTitleEl = document.querySelector("#pTitle");
const nameBtnEl = document.querySelector("#nameBtn");
const resetBtn = document.querySelector("#restart");

// -----------> EVENT LISTENERS < -------------
// the interaction between the user and the coded in elements such as:
// buttons "clicking", audio etc.

document.querySelector("#spin").addEventListener("click", spinWheel);
// document.querySelector("#restart").addEventListener("click", restartGame);

// -------------> THE FUNCTIONS OF THE GAME < -------------
// the functioning of the game will include: a winning strategy using randomization, enabling a spinning
// effect  and tracking the amount of games played.

function spinWheel() {
  const min = 1024;
  const max = 9999;
  const deg = Math.floor(Math.random() * (max - min)) + min;
  wheelEl.style.transform = "rotate(" + deg + "deg) ";
displayResult();
console.log(displayResult);
}

function findResult() {
  let value = values[Math.floor(Math.random() * values.length)];
  return value;
}

function displayResult(gain, safe, lose) {
    if (gain === 0) {
    cTitleEl.innerHTML = 'JACKPOT HIT!!!';
    creditEl.innerHTML = '$5,000,000.00 USD';
    }  else if (gain === 1)  {
        creditEl.innerHTML = '$650.00 USD';
    } else if (gain === 2) {
      creditEl.innerHTML = '$800.00 USD';
    } else if (gain === 10) {
         creditEl.innerHTML = '$700.00 USD';
    } else if (gain === 11) {
         creditEl.innerHTML = '$950.00 USD';
    } else if (safe === 3) {
        return 0;
    } else if (safe === 9) {
        return 0;
    } else if (lose === 4) {
         creditEl.innerHTML = "$300.00 USD";
    } else if (lose === 5) {
         creditEl.innerHTML = "$50.00 USD";
    } else if (lose === 6) {
        cTitleEl.innerHTML = "BANKRUPT!!!";
        creditEl.innerHTML = "$0.00 GAME OVER!";
    } else if (lose === 7) {
         creditEl.innerHTML = "$350.00 USD";
    } else (lose === 8) 
         creditEl.innerHTML = "$200.00 USD";
}


function nameInputValue() {
  let inputVal = document.getElementById("nameInput").value;
  document.getElementById("pTitle").textContent = inputVal;
}
