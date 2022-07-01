const squares = Array.from(document.querySelectorAll(".square"));
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
let hit = false;
let result =  0;
let currentTime = 60;
let timerId = null;




function randomSqaure() {
    squares.forEach(square => {
        square.classList.remove("mole");
        square.classList.remove("hit");
        hit = false;
    })
    rand = Math.floor(Math.random()*9);
    console.log(rand);
    let randomSquare = (squares[rand]);
    randomSquare.classList.add("mole");
    return squares[rand];
}

squares.forEach(square => {
    square.addEventListener("mousedown",event => {
        if (square.classList.contains("mole")) {
            result++;
            hit=true;
            score.innerText=`${result}`;
            square.classList.remove("mole")
            square.classList.add("hit")
        }
    })
})

function getLoopTimer(hit) {
    if (hit==true) {
        return 1000;
    }
    else {
        return 500;
    }
}

function moveMole() {
        if (hit=true) {
            setTimeout(() => {  console.log("World!"); }, 500);
        }
        randomSqaure();
    }

let gameLoop = setInterval(moveMole,500);

function countDown() {
    currentTime--;
    timeLeft.innerText = currentTime;

    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        alert("Game OVER! your final score is"+result);
    }
}

let countDownTimerId = setInterval(countDown,1000);
