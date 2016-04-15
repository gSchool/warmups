// Global game parameters. These will be set based on the form input.
// They should be set in readQueryParams.
var GLOBALS = {};

// Global references to DOM elements
// These will get initialized when window.onload is called
var scoreBoard;
var gameStartButton;
var gameCurrentlyActive;

//
// Main entry point:
// Read the input paramaters,
// Build the Mole Field of Dreams
// Start the game
//
window.onload = function(){
    
    readQueryParams();
    createMoleField(GLOBALS.MOLE_FIELD_ROWS, GLOBALS.MOLE_FIELD_COLUMNS);

    // Get the DOM elements associated with each of these things.
    scoreBoard = document.getElementById('score-board');
    gameStartButton = document.getElementById('game-starter');

    // Add an event listener to the gameStartButton. 
    // It should call the startGame function when the 
    // 'click' event is triggered
    gameStartButton.addEventListener('click', startGame);
};

// Examine document.location.search and extract the info 
// from our form. Store each key/value pair as a property in GLOBALS.
// GLOBALS should look something like this when we're done.
//   {  MOLE_UP_MIN: "1",
//      MOLE_UP_MAX: "4",
//      NUMBER_OF_ROUNDS: "5",
//      MOLES_PER_ROUND: "5",
//      ROUND_COOLDOWN: "5" }
function readQueryParams() {
    
    if(document.location.search) {
        var queryString = document.location.search.replace('?', '');

        queryString.split('&').forEach(function (pair) {
            var pairArray = pair.split('=');
            GLOBALS[pairArray[0]] = pairArray[1]
        });
    }
    console.log(GLOBALS);    
}

// Create and insert a 3x3 HTML table.
// Use createSingleMoleHole() to create the <td> elements
function createMoleField() {
    // Select the DOM element for the mole-field
    var field = document.getElementById('mole-field');

    for(var i = 0; i < 3; i++) {
        // Create a table row element (<tr>)
        var tableRow = document.createElement('tr');
        
        for(var j = 0; j < 3; j++) {
            tableRow.appendChild(createSingleMoleHole());
        }
        
        field.appendChild(tableRow);
    }
}

// create a complex HTML element and return it. 
// The element returned from this function should look like this
// be <td><div data-hole-occupied="false" class="mole-hole"></div></td>
function createSingleMoleHole() {
    var tableData = document.createElement('td');
    var hole = document.createElement('div');
    hole.className = 'mole-hole';
    hole.setAttribute('data-hole-occupied', "false");
    tableData.appendChild(hole);

    return tableData;
}

///
/// Game logic for rounds and restarting.
///

/**
 * Reset the score and start round 0
 */
function startGame() {
    // Make sure a game isn't already in progress before starting a game
    // set the game to be in progress if its not.
    if(gameCurrentlyActive){
        return;
    }
    else {
        gameCurrentlyActive = true;    
    }
    

    // Set the scoreboard back to zero
    scoreBoard.setAttribute('data-score', 0);
    scoreBoard.innerHTML = 0;

    // Hide the 
    gameStartButton.style.visibility = "hidden";
    initiateRound(0);
}
/**
* Use a closure and the event loop to act every ROUND_COOLDOWN seconds
*/
function initiateRound(roundNumber) {

    // Closing over roundNumber in this context is confusing - but important.

    // Without access to the environment variable roundNumber the rounds would not advance properly.
    // It's recursive, but also in an anonymous function, sent on "timeout", 
    // only to return after ROUND_COOLDOWN seconds. 
    var closureFunction = function() {

        if(roundNumber < GLOBALS.NUMBER_OF_ROUNDS) {
            // Create the moles 
            for(var i = 0; i < GLOBALS.MOLES_PER_ROUND; i++) {
                new Mole(GLOBALS.MOLE_UP_MIN, GLOBALS.MOLE_UP_MAX);
            }

            // Next round, using our precious closed-over parameter 
            initiateRound(roundNumber + 1);
        }
        else {
            endGame();
        }
    };

    // Set it and forget it.
    setTimeout(closureFunction, GLOBALS.ROUND_COOLDOWN * 1000);
}

/**
 * When we're sure the last moles are done, let the user try again
 */
function endGame() {

    var maxTimeUp = GLOBALS.MOLE_ANIMATE_TIME + GLOBALS.MOLE_UP_MAX;

    // Wait a little while after final round, then put the 
    // gameStartButton back on the screen.
    setTimeout(function(){
        gameStartButton.style.visibility = "visible";
    }, maxTimeUp * 1000);
}

