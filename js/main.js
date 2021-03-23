// ----------> VARIABLES < --------- 
// create and assign constant (non changing) variables such as:
//  number values within wheel & game play audio.
const wheelIndex = [0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10,  11];

let spinAudio = new Audio('https://voca.ro/1hPceoBTH0Xk');

let winAudio = new Audio('https://voca.ro/19yrhI3UJeKu');

// ----------->  GAME STATE  <------------
// define the variables which are apart of the game state such as:
// results, if player is a winner, how much the player has won or lost at the end.

let spins, result, winner;

// --------------> ELEMENTS MANIPULATED  <---------------
// based off game results, the modification of html elements such as:
// player name, winner etc.
const playerName = document.querySelector('#player-title');
const winMoney = document.grabElementById('#credit-box');
const loseMoney = document.grabElementById('#credit-box');
// -----------> EVENT LISTENERS < -------------
// the interaction between the user and the coded in elements such as:
// buttons "clicking", audio etc.
document.querySelector('.spin').addEventListener('click', spinWheel);
// -------------> THE FUNCTIONS OF THE GAME < -------------
// the functioning of the game will include: a winning strategy using randomization, enabling a spinning 
// effect  and tracking the amount of games played.

