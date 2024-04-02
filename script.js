const boxes = document.querySelectorAll(".button");
const newGame = document.querySelector(".newGame");
const reset = document.querySelector(".reset");
const congratulation = document.querySelector(".Congratulation");
const container2 = document.querySelector(".container2");
const container = document.querySelector(".container");
const text = document.querySelector('.text');
let turn = true;
let count = 0;

let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(`Count = ${count}`);
    count++;
    if (turn) {
      box.innerText = "X";
      box.style.color = "green";
      turn = false;
    } else {
      box.innerText = "O";
      box.style.color = "orange";
      turn = true;
    }
    box.disabled = true;
    let isWinner = winnerChecker();
    console.log(`isWinner = ${isWinner}`);
    if (count === 9 && !isWinner) {
      draw();
    }
    winnerChecker();
  });
});

let winnerChecker = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0],pattern[1],pattern[2]);
    let pos1 = boxes[pattern[0]].innerText; // innerText is liye likha kyukay jb button pr click kiya jaye ga to innerText mein upper likha hay wo likha howa aajaye ga jaisay ki mein nay click to upper pahly X likha hay to yaha innerText mein X aajaye ga or jb yaha X aaye to neechy condion rakhi hay kay pos1 ===pos2 === pos3 to wo is tarah chalay gee kay jb usay pata hoga kay is box ye likha howa hay
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    // console.log(pos1,pos2,pos3);
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        // container2.classList.remove('hide');
        congratulation.innerText = "We have won this game";
        congratulation.style.color = "green";
        container.classList.add("hide");
        container2.classList.remove("hide");
        text.classList.add('hide');
        // congratulation.style.border = '5px solid white';
      }
    }
  }
};

const draw = () => {
  container2.classList.remove("hide");
  congratulation.innerText = "Match Draw";
  congratulation.style.color = "black";
  container.classList.add("hide");
  text.classList.add('hide');
  count = 0;
};

const newGamereset = () => {
  for (let box of boxes) {
    box.innerText = "";
    turn = true;
    box.disabled = false;
    text.classList.remove('hide');
    container.classList.remove("hide");
    container2.classList.add("hide");
    count = 0;
  }
};

newGame.addEventListener("click", newGamereset);
reset.addEventListener("click", newGamereset);
