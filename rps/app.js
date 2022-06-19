const userChoice = document.getElementById('user-input');
const computerChoice = document.getElementById('computer-input');
const resultDisplay = document.getElementById('result');
const go = document.getElementById('go')
const result = document.getElementById('result')

computerChoiceVal = null;
randomNumber = 0;


function gone () {
    const go = document.getElementById('go');
    const result = document.getElementById('result');
    const userChoice = document.getElementById('user-input');
    const userChoiceVal = userChoice.options[userChoice.selectedIndex].value;
    const userChoiceInd = userChoice.options[userChoice.selectedIndex].index+1;
    randomNumber = Math.floor(Math.random()*3)+1; 
    
    switch (randomNumber) {
        case 1:
            computerChoiceVal = "rock";
            break;
        case 2:
            computerChoiceVal = "paper";
            break;
        case 3:
            computerChoiceVal = "scissors";
        break;
    }
    computerChoice.innerHTML = computerChoiceVal
//There is an indirect enumeration for user choice and comptuer choice
    if (userChoiceInd == randomNumber) {
        result.innerHTML = "DRAW!"
        result.style = "color: blue"
    }
    if (userChoiceInd == 1 && randomNumber == 3 || userChoiceInd == 2 && randomNumber == 1 || userChoiceInd == 3 && randomNumber == 2)
    {
        result.innerHTML = "YOU WIN!"
        result.style = "color: green"
    }
    if (userChoiceInd == 1 && randomNumber == 2 || userChoiceInd ==2 && randomNumber == 3 || userChoiceInd == 3 && randomNumber == 1)
    {
        result.innerhtml = "YOU LOSE!"
        result.style="color: red"
    }

}




