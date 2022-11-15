const userScore = document.querySelector(`.user-score`);
const computerScore = document.querySelector(`.computer-score`);
const userBox = document.querySelector(`#box-user`);
const computerBox = document.querySelector(`#box-computer`);
const boxClick = userBox.querySelectorAll(`.userElement`);

const userHealth = document.querySelector(`.bar-user`)
const computerHealth = document.querySelector(`.bar-computer`)

// 1 = rock 2 = paper 3 = scissors
let computerInventory = [];
let userInventory = [];
let full = [`R`, `P`, `S`];
let half = [`r`, `p`, `s`];


document.addEventListener('DOMContentLoaded', function() {    // When page loads
    generatesInventory();
    userScore.textContent = calculateScore(userInventory);
    computerScore.textContent = calculateScore(computerInventory);
    displayInventory();
})

boxClick.forEach(function(box) {
    box.addEventListener(`click`, function() {
        if (box.innerHTML === `*`) {
            return;
        }
        let classNumber = box.className;
        gameround(classNumber[4]);
        userScore.textContent = calculateScore(userInventory);
        computerScore.textContent = calculateScore(computerInventory);
        displayInventory();
    })
})

//---------Game-------------------------------------------------------------------------------------------------

function generatesInventory() {    // sets the inventory for both of the players for the game to start
    computerInventory = [`R`,`R`,`R`,`P`,`P`,`P`,`S`,`S`,`S`];
    userInventory = [`R`,`R`,`R`,`P`,`P`,`P`,`S`,`S`,`S`];
}

function computerRandom() {    // generates a random number that representates computers hand
    let random = Math.floor(Math.random()*9);
    while (computerInventory[random] === '*') { random = Math.floor(Math.random()*9) }
    return random;
}

function roundWinner(userIndex, computerIndex) {    // decides the winner of the round
    let userHand = full.indexOf(userInventory[userIndex]);
    if (userHand === -1) {userHand = half.indexOf(userInventory[userIndex]);}
    let computerHand = full.indexOf(computerInventory[computerIndex]);
    if (computerHand === -1) {computerHand = half.indexOf(computerInventory[computerInventory]);}

    if(userHand === computerHand) {return null}    // if there is a tie 
    if (userHand === 0) {
        if(computerHand === 1) {return false}
        return true }
    if (userHand === 1) {
        if(computerHand === 2) {return false}
        return true }
    if (userHand === 2) {
        if(computerHand === 0) {return false}
        return true }
}

function gameround(userIndex) {    // simulates a round
    let computerIndex = computerRandom()
    let result = roundWinner(userIndex, computerIndex);
    console.log(result, computerIndex);
    if (result === true) {    // if user wins 
        let userHand = full.indexOf(userInventory[userIndex]);
        if (userHand != -1) {userInventory[userIndex] = half[userHand];}    // updates users inventory
        computerInventory[computerIndex] = `*`;    // updates computers inventory
    } 
    else if (result === false) {    // if computer wins 
        userInventory[userIndex] = `*`;    // updates users inventory
        let computerHand = full.indexOf(computerInventory[computerIndex]);
        if (computerHand != -1) {computerInventory[computerIndex] = half[computerHand];}    // updates computers inventory
    } 
    else {    // if theres a tie - cannot loose a life if there is a tie.
        let userHand = full.indexOf(userInventory[userIndex]);
        let computerHand = full.indexOf(computerInventory[computerIndex]);
        if (userHand != -1) {userInventory[userIndex] = half[userHand];}    
        if (computerHand != -1) {computerInventory[computerIndex] = half[computerHand];}    
    }
}

function calculateScore(inventory) {
    inventory = inventory.filter(function(item) {
        return item != `*`;
    })
    return inventory.length;
}

function displayInventory() {
    for (let i = 0; i < userInventory.length; i++) {
        if (userInventory[i] === 'r' || userInventory[i] === 'R') {
            userBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/rock.svg" alt="rock">';
        }
        if (userInventory[i] === 'p' || userInventory[i] === 'P') {
            userBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/paper.svg" alt="paper">';
        }
        if (userInventory[i] === 's' || userInventory[i] === 'S') {
            userBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/scissor.svg" alt="scissor">';
        }
    }
    for (let i = 0; i < computerInventory.length; i++) {
        if (userInventory[i] === 'r' || computerInventory[i] === 'R') {
            computerBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/rock.svg" alt="rock">';
        }
        if (userInventory[i] === 'p' || computerInventory[i] === 'P') {
            computerBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/paper.svg" alt="paper">';
        }
        if (userInventory[i] === 's' || computerInventory[i] === 'S') {
            computerBox.querySelector(`.box-${i}`).innerHTML = '<img src="img/scissor.svg" alt="scissor">';
        }
    }
}


//Documentation:
/*
    User and computer has 3 of all that is rock paper and scissors. 
    When a piece from inventory is selected computer selects a piece randomly 
    If the user wins the durability of the selected item gets half and if the durability is already half, nothing happens
    If the user loosese, He looses the selected item
    If there is a tie both of the selected item looses the durability and if the durablity is already half nothing happens
*/ 

