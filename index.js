// 1 = rock
// 2 = paper
// 3 = scissors
let computerInventory = [];
let userInventory = [];
let defaultInventory = [`R`,`R`,`R`,`P`,`P`,`P`,`S`,`S`,`S`];
let full = [`R`, `P`, `S`];
let half = [`r`, `p`, `s`];

//---------PreGame----------------------------------------------------------------------------------------------
function preGame() {    // before the game is started
    generatesInventory();    // Fills up the inventory for both of the players
}
function generatesInventory() {    // sets the inventory for both of the players for the game to start
    computerInventory = defaultInventory;
    userInventory = defaultInventory;
}
//---------PreGame----------------------------------------------------------------------------------------------


//---------Game-------------------------------------------------------------------------------------------------
function computerRandom() {    // generates a random number that representates computers hand
    let random = Math.floor(Math.random()*9); 
    let direction = Math.floor(Math.random()*2);    // to get a proper hand for the computer
    if (direction === 0) {direction = -1;}
    while (computerInventory[random] === '*') { random += direction }
    return random;
}

function checkLives(array) {    // checks the inventory of both players to get the winner
    livesLeft = array.filter(function() {
        if (tools === `*`) {return false;}
        return true;
    });
    return livesLeft.length;
}

function roundWinner(userIndex, computerIndex) {    // decides the winner of the round
    let userHand = full.indexOf(userInventory[userIndex]);
    if (userHand === -1) {userHand = half.indexOf(userInventory[userIndex]);}

    let computerHand = full.indexOf(computerInventory[computerIndex]);
    if (computerHand === -1) {computerHand = half.indexOf(computerInventory[computerInventory]);}

    if(userHand === computersHand) {return null}    // if there is a tie 

    if (userHand === 0) {
        if(computerHand === 1) {return false}
        return true
    }
    if (userHand === 1) {
        if(computerHand === 2) {return false}
        return true
    }
    if (userHand === 2) {
        if(computerHand === 0) {return false}
        return true
    }
}


function gameround(userIndex) {
    let computerIndex = computerRandom()
    let result = roundWinner(userIndex, computerIndex);

    if (result === true) {    // if user wins 
        let userHand = full.indexOf(userInventory[userIndex]);
        if (userHand) {userInventory[userIndex] = half[userHand];}    // updates users inventory
        else {userInventory[userIndex] = `*`};
        computerInventory[computerIndex] = `*`;    // updates computers inventory
    } 
    else if (result === false) {    // if computer wins 
        userInventory[computerIndex] = `*`;    // updates users inventory
        let computerHand = full.indexOf(computerInventory[computerIndex]);
        if (computerHand) {computerInventory[computerHand] = half[computerHand];}    // updates computers inventory
        else {computerInventory[computerHand] = `*`};
    } 
    else {    // if theres a tie
        let userHand = full.indexOf(userInventory[userIndex]);
        let computerHand = full.indexOf(computerInventory[computerIndex]);
        if (userHand) {userInventory[userIndex] = half[userHand];}    // updates users inventory
        else {userInventory[userIndex] = `*`};
        if (computerHand) {computerInventory[computerHand] = half[computerHand];}    // updates computers inventory
        else {computerInventory[computerHand] = `*`};
    }
}
//---------Game-------------------------------------------------------------------------------------------------