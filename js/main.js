
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let credits = 500;
const wheelEl = document.querySelector(".wheel");
const valueEl = document.getElementById("value");
const spinBtnEl = document.querySelector("#spin");
const nameBtnEl = document.querySelector("#nameBtn");
const resetBtn = document.querySelector("#restart");
const creditEl = document.getElementById("credit-box");
const cTitleEl = document.getElementById("cTitle");
const pTitleEl = document.querySelector("#pTitle");
function nameInputValue() {
  let inputVal = document.getElementById("nameInput").value;
  document.getElementById("pTitle").textContent = inputVal;
}
// -----------> EVENT LISTENERS < -------------
document.querySelector("#spin").addEventListener("click", spinWheel);

function initialize() {
  let randomIdx = values[Math.floor(Math.random() * values.length)];
  return randomIdx;
}
function spinWheel() {
  const min = 1024;
  const max = 9999;
  const deg = Math.floor(Math.random() * (max - min)) + min;
  wheelEl.style.transform = "rotate(" + deg + "deg) ";
  let position = initialize();
   render(position);
}

function render(position) {
    if (position === 0) {
     credits += 5000000;
     creditEl.textContent = `$ ${credits}.00 USD `;
    cTitleEl.textContent = 'JACKPOT HIT!!!';
    cTitleEl.style.color = "#50d121";
    }  else if (position === 1)  {
        credits += 150; 
        creditEl.textContent = `$ ${credits}.00 USD `;
        creditEl.style.color = "#50d121";
    } else if (position === 2) {
         credits += 300;
         creditEl.innerHTML = `$ ${credits}.00 USD `;
    } else if (position === 10) {
         credits += 200;
         creditEl.textContent = `$ ${credits}.00 USD `;
    } else if (position === 11) {
         credits += 450;
         creditEl.textContent = `$ ${credits}.00 USD `;
    } else if (position === 3) {
        return 0;
    } else if (position === 9) {
        return 0;
    } else if (position === 4) {
        credits -= 200;
        creditEl.textContent = `$ ${credits}.00 USD `;
    } else if (position === 5) {
          credits -= 450;
          creditEl.textContent = `$ ${credits}.00 USD `;
    } else if (position === 6) {
          cTitleEl.innerHTML = "BANKRUPT!!!";
          cTitleEl.style.color = "#e20d3f";
          creditEl.textContent = `GAME OVER!!!!`;
          creditEl.style.color = "#482403";
          creditEl.style.fontSize = "32px";
    } else if (position === 7) {
         credits -=  150;
         creditEl.textContent = `$ ${credits}.00 USD `;
    } else if (position === 8) 
         credits -= 300;
         creditEl.textContent = `$ ${credits}.00 USD `;
    }

