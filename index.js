// 1 = rock
// 2 = paper
// 3 = scissors
// let options = [`rock`, `paper`, `scissors

let computerInventory = [];
let userInventory = []
let defaultInventory = [`R`,`R`,`R`,`P`,`P`,`P`,`S`,`S`,`S`];
let chooseTemplate = [`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];

function generatesInventory(rng = 1) {    // Have not implemented the rng part yet
    computerInventory = defaultInventory;
    userInventory = defaultInventory;
}

function computerRandom() {    // generates a random number that representates computers hand
    let random;
    do {
        random = Math.ceil(Math.random()*9);
    } while (computerInventory[random] == '');
    return random - 1;
}

function roundWinner(userHand, computerHand = computerRandom()) {    // decides the winner of the round

   
}

function checkLives(array) {    // checks the inventory of both players to get the winner
    livesLeft = array.filter(checkLost);
    return livesLeft.length;
}

function checkLost(tools) {    // Checks the passed index of inventory 
    if (tools === `*`) {
        return false;
    }
     return true;
}

function startGame() {
    generatesInventory();  // Fills up the inventory for both of the players

    do {
        console.log(`AI hasss ` + computerInventory);
        console.log(`You have ` + userInventory);
        console.log(`Choooose ` + chooseTemplate);

        

    } while (checkLives(computerInventory) > 0 || checkLives(userInventory) > 0);
 }

 function gameMenu(){
    
    let selection = 0;
 
    console.log(
`        █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
         █░░ ROCK-PAPER-SCISSORS ░░█
         █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
         █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
         █░░        MENU         ░░█
         █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
         █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
         █░░        MENU         ░░█
         █░░---------------------- █
         █░░ 1. Start Game       ░░█
         █░░ 2. Rules            ░░█
         █░░ 3. History          ░░█
         █░░ 4. Quit             ░░█
         █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█`);
    do {
       selection = Object.values(process.argv).slice(2).join(' ').toString();
         switch(selection) {
            case 1:
                rules();
                break;
            case 2:
                rules();
                break;
            case 3:
                history();
                break;
            case 4:
                console.log(`Thankyou for playing my game!`);
                break;
            default:
                console.log(`uh-Oh Wrong Input, try again.`);
         }

    } while (selection != 4);
}

 // Function call to start the game
 gameMenu();