/**
 * @constructor
 * A mole object represents a mole in the game.
 *
 * Moles need 4 variables
 *  - this.timeSpentUp: the amount of time a mole spends on the board before being removed
 *
 *  - this.occupiedHole: A DOM element representing the hole that a mole occupies
 *
 *  - this.moleElement: A DOM element that is created when a mole is created. This element
 *                 should be appended to occupiedHole when a mole emerges
 * 
 * - this.removed: false originally. this needs to be set to true in 
 *                 Mole.prototype.removeMole
 *
 */
function Mole(minUpTime, maxUpTime){

    // A number value. It should be random. 
    // HINT: finish out Mole.prototype.getRandomBetween and use it here!
    this.timeSpentUp = this.getRandomBetween(minUpTime, maxUpTime) * 1000; 

    // this.removed should always initially be false. 
    // A new mole has not been removed from the DOM yet.
    this.removed = false;

    // This should be a DOM element selected from the board.
    // The element must be a mole hole, and it must not already
    // be occupied.
    // HINT: finish and use Mole.prototype.selectHole then use it here!
    this.occupiedHole = this.selectHole();

    // Create an HTML element to represent the Mole!
    this.moleElement = document.createElement('div');
    this.moleElement.className = 'mole';

    // It learns to love
    this.moleElement.addEventListener('click', this.whackThisMole.bind(this));
    
    // Moles always emerge when they are created.
    this.emerge();
}

/**
 * This function should select an unoccupied hole from the DOM. 
 *
 * It should mark that hole as occupied, and add a DOM element for the mole. 
 *
 * It should use setTimeout() to automatically remove the mole after some random 
 * period of time. 
 */
Mole.prototype.emerge = function() {

    // If a hole wasn't available then this mole never gets a chance at love
    if(this.occupiedHole === undefined){
        return;
    }

    // claim the hole by setting the data-hole-occupied attribute to true
    this.occupiedHole.setAttribute('data-hole-occupied', 'true');

    // Add our mole (this.moleElement) to the hole we're choosing
    // (this.occupiedHole)
    this.occupiedHole.appendChild(this.moleElement);

    // After a period of time call this.removeMole
    setTimeout(this.removeMole.bind(this), this.timeSpentUp);
}

/**
 * This function should change a mole from the default state, to the
 * whacked state.
 * 
 * Then it should update the score.
 * 
 * Then after a period of time, it should call removeMole.
 * 
 * All of these changes should be visible to the user.
 */
Mole.prototype.whackThisMole = function() {

    // Love at last,
    this.moleElement.className += ' in-love';

    // and the player scored!
    // (scoreboard is a global reference to a dom element)
    var newScore = parseInt(scoreBoard.getAttribute('data-score')) + 1;
    scoreBoard.setAttribute('data-score', newScore);
    scoreBoard.innerHTML = newScore;

    setTimeout(this.removeMole.bind(this), 1000);
}

/**
 * This function should remove the mole from the DOM, and free whatever
 * hole the mole was occupying so that other moles can select it. 
 */
Mole.prototype.removeMole = function() {
    if(this.removed) {
        return;
    }
    this.occupiedHole.setAttribute('data-hole-occupied', 'false');
    this.occupiedHole.removeChild(this.moleElement);
    this.removed = true;
}
/**
 * Select an element from the DOM. The element must be one of the 
 * mole holes, and it must not already be occupied. 
 * 
 * If all those conditions are met, return an HTML element. 
 * If those conditions cannot be met (i.e. every hole is occupied)
 * then return undefined.
 */
Mole.prototype.selectHole = function() {
    var moleHoles = document.querySelectorAll('[data-hole-occupied="false"]');
    return moleHoles[this.getRandomIntBetween(0, moleHoles.length)];
};

/**
 * This must return a random number in between min and max.
 * HINT: use Math.random()
 */
Mole.prototype.getRandomBetween = function(min, max) {
    return Math.random() * (max - min) + min;
};

/**
 * This must return an integer in between min and max
 * HINT: complete getRandomBetween and use it.
 */
Mole.prototype.getRandomIntBetween = function(min, max) {
    return Math.floor(this.getRandomBetween(min, max));
};
