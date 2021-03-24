// ----------> VARIABLES < --------- 
// create and assign constant (non changing) variables such as:
//  number values within wheel & game play audio.

0
const s0pinAudio = new Audio('https://voca.ro/1hPceoBTH0Xk');

// ----------->  GAME STATE  <------------
// define the variables which are apart of the game state such as:
// results, if player is a winner, how much the player has won or lost at the end.

let values, winner;

// --------------> ELEMENTS MANIPULATED  <---------------
// based off game results, the modification of html elements such as:
// player name, winner etc.

// game result elements
const winMoney = document.getElementById('credit-box');
const loseMoney = document.getElementById('credit-box');

// html elements 
const wheelEl = document.querySelector('.wheel');
const valueEl = document.getElementById('value');
const spinBtnEl = document.querySelector('#spin');
const pTitleEl= document.querySelector('#pTitle');
const nameBtnEl = document.querySelector('#nameBtn');
const resetBtn = document.querySelector('#restart');

// -----------> EVENT LISTENERS < -------------
// the interaction between the user and the coded in elements such as:
// buttons "clicking", audio etc.

document.querySelector('#spin').addEventListener('click', spinWheel);
document.querySelector('#restart').addEventListener('click', restartGame);

// -------------> THE FUNCTIONS OF THE GAME < -------------
// the functioning of the game will include: a winning strategy using randomization, enabling a spinning 
// effect  and tracking the amount of games played.


 function spinWheel( ) {
        // spinAudio.play();
       const min = 1024;
       const max = 9999;
       const deg = Math.floor(Math.random() * (max - min)) + min;
        wheelEl.style.transform = "rotate("+deg+"deg) ";
 }



function restartGame ( ) {

}



function nameInputValue () {
        let  inputVal = document.getElementById("nameInput").value;     
        document.getElementById("pTitle").textContent = inputVal;
}

function initialize() {
        values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
         winner = null;

    
        }
        renderCredit();
    


function renderCredit () {
        
}