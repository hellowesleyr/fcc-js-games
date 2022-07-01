const squares = Array.from(document.querySelectorAll(".square"));
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
let hit = false;
let result =  0;
let timerId = null;




function randomSqaure() {
    squares.forEach(square => {
        square.classList.remove("mole");
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
            hit=true;
            result++;
            score.innerText=`${result}`;
        }
    })
})

function moveMole() {
        if (hit==false)
        {
            timerId = setInterval(randomSqaure,500);
        }
        if (hit==true) {
            timerId = setInterval(randomSqaure,2000);
        }
    }



moveMole();

function countDown() {

}
