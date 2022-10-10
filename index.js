// 1 = rock 
// 2 = paper 
// 3 = scissors 

const buttons = document.querySelectorAll('button');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const winnerp = document.querySelector('.winner');

let pScoreInt = 0;
let cScoreInt = 0;

buttons.forEach(function(button) {

    winnerp.textContent = ' ';

    button.addEventListener('click' , function() {
        game(button.dataset.num);
    })
})










// helper functions


function random() {
    return Math.floor(Math.random()*3) + 1;    // returns 1, 2 or 3
}

function winner(pSelection) {    // returns true if player wins and vica-versa, and null if its a tie
    let cSelection = random();
    pSelection = Number(pSelection)
    cSelection = Number(cSelection)

    if (pSelection === cSelection) {
        return null;
    }

    if (pSelection === 1) {
        if (cSelection === 2) {
            return false
        } 
        return true;
    }

    if (pSelection === 2) {
        if (cSelection === 3) {
            return false
        }
        return true;
    }
    
    if (pSelection === 3) {
        if (cSelection === 1) {
            return false
        }
        return true;
    } 
}

function game(pSelection) {

    let result = winner(pSelection);
    //while (pScore !== 10 || cScore !== 10) {
    {
        if (result != null) {
            if (result === true) {
                pScoreInt++;
            } else {
                cScoreInt++;
            }
        }
    }

    if (pScoreInt === 5 || cScoreInt === 5) {

        if (pScoreInt === 5) {
            winnerp.textContent = 'You Won!!'
        } else {
            winnerp.textContent = 'You Lost ;('
        }
        pScoreInt = 0;
        cScoreInt = 0;
    }

    pScore.textContent = pScoreInt;
    cScore.textContent = cScoreInt;
}