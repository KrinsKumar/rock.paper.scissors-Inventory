// 1 = rock 
// 2 = paper 
// 3 = scissors 

function random() {
    return Math.floor(Math.random()*3) + 1;    // returns 1, 2 or 3
}


function winner(pSelection) {    // returns true if player wins and vica-versa, and null if its a tie
    cSelection = random();

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


function game() {
    let pScore = 0;
    let cScore = 0;

    while (pScore !== 10 || cScore !== 10) {
        let result = winner();

        if (result) {
            if (result === true) {
                pScore++;
            } else {
                cScore++;
            }
        }
    }
}