let random = Math.floor(Math.random() * 100);
let round = 0;
let end = false;
let win = false;

const input = document.querySelector("input");
const button = document.querySelector("button");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const buttonNewGame = document.createElement("button");
const row = document.querySelector(".row:last-of-type");

buttonNewGame.setAttribute("class", "new-game");
buttonNewGame.innerHTML = "Neues Spiel";
row.appendChild(buttonNewGame);

button.addEventListener("click", handelClick);
buttonNewGame.addEventListener("click", startNewGame);

function handelClick() {
  if (!end) {
    round++;
    para2.innerHTML = round;

    const guestNumber = input.value;

    if (guestNumber == random) {
      para1.innerHTML = "Du hast die Zahl erraten";
      end = true;
      win = true;
    } else if (guestNumber < random) {
      para1.innerHTML = "Die Zahl ist zu klein";
    } else if (guestNumber > random) {
      para1.innerHTML = "Die Zahl ist zu gross";
    }

    if (round == 10 || win == true) {
      if (win == true) {
        para3.innerHTML = "Du hast gewonnen!";
      } else {
        para3.innerHTML = "Du hast verloren";
      }
    }

    input.value = "";
  }
}

function startNewGame() {
  random = Math.floor(Math.random() * 100);
  round = 0;
  end = false;
  win = false;
  para1.innerHTML = "";
  para2.innerHTML = "";
  para3.innerHTML = "";
  input.value = "";
}
