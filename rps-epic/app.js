
let playerHealth = 100;
let computerHealth = 100;
const playerImage = document.getElementById("player-image")
const denumControl = ['','rock','paper','scissors']
const result = document.querySelector(".result")

function checkDeath(playerHealth,computerHealth) { 
    if (computerHealth <= 0) {
        document.getElementById("computer-bar").style.width=`0%`;
        result.innerHTML = "Game Victory!";
        controls = document.querySelectorAll(".control");
        controls.forEach(el => {
            el.style.display="none";
        replayBtn = document.querySelector(".replay");
        replayBtn.style.display="flex"
        });
    }
    if (playerHealth <= 0) {
        document.getElementById("player-bar").style.width=`0%`;
        result.innerHTML = "Game Loss!";
        controls = document.querySelectorAll(".control");
        controls.forEach(el => {
            el.style.display="none";
        replayBtn = document.querySelector(".replay");
        replayBtn.style.display="flex"
        });
    }
}

function playRound(moveNum) {
    let computerChoice = Math.ceil(Math.random()*3);
    document.getElementById("computer-image").style.backgroundImage = `url(img/${denumControl[computerChoice]}-computer.png)`
    document.getElementById("player-image").style.backgroundImage = `url(img/${denumControl[moveNum]}-player.png)`

    //Draw
    if (moveNum == computerChoice) {
        result.innerHTML = "Result: Draw"
        console.log(`computer health: ${computerHealth}%, player health: ${playerHealth}`)

        return;
    }
    //Victory
    if (moveNum == 1 && computerChoice == 3 || moveNum == 2 && computerChoice == 1 || moveNum == 3 && computerChoice == 2) {
        result.innerHTML = "Result: Round Win"
        computerHealth-=34
        document.getElementById("computer-bar").style.width=`${computerHealth}%`
        checkDeath(playerHealth,computerHealth)
        console.log(`computer health: ${computerHealth}%, player health: ${playerHealth}`)

        return;
    }
    //Else loss
    else {
        result.innerHTML = "Result: Round loss"
        playerHealth-=34
        document.getElementById("player-bar").style.width=`${playerHealth}%`
        checkDeath(playerHealth,computerHealth)
        console.log(`computer health: ${computerHealth}%, player health: ${playerHealth}`)

        return;
    }
   
}


controls = document.querySelectorAll(".control");
controls.forEach(control => control.addEventListener('click', event => {
    control.number = control.id.split('')[1]
    const enumControl = []
    enumControl['rock'] = 1;
    enumControl['paper'] = 2;
    enumControl['scissors'] = 3;


    playRound(enumControl[control.id])
}));

