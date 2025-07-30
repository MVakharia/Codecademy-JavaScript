//This video game consists of two players floating, each using 100 helium balloons.

//The players shoot pellets at each other’s balloons.

// After 10 minutes, the player with the most balloons left wins.

class Player {
    constructor(name, hitsPerMinute) {
        this._name = name;

        this._hitsPerMinute = hitsPerMinute;

        this._balloonCount = 100;
    }

    get name () {
        return this._name;
    }

    get hitsPerMinute () {
        return this._hitsPerMinute;
    }

    get balloonCount () {
        return this._balloonCount;
    }

    status () {
        console.log(`Player: ${this._name} -- Balloons Left: ${this._balloonCount}`)
    }
}

//Takes two 'Player' instances.

// Calculates the balloons left for each player after 10 minutes using the other player's 'hitsPerMinute' property.

//Returns the name of the winner.

//If the result is a tie, return the string 'Tie'.

const bob = new Player('Bob', 11);

const bill = new Player('Bill', 10);

function balloonAttack (playerOne, playerTwo) {
    let totalHits_P1 = playerOne.hitsPerMinute * 10;

    let totalHits_P2 = playerTwo.hitsPerMinute * 10;

    if(totalHits_P1 > totalHits_P2) {
        return playerOne.name;
    }
    else if (totalHits_P2 > totalHits_P1) {
        return playerTwo.name;
    }
    else if (totalHits_P2 === totalHits_P1 ) {
        return 'Tie';
    }
}

console.log(balloonAttack(bob, bill));

