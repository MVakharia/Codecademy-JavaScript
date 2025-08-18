const brainstormDinner = require('Async JS and Requests/Async-await/brainstormDinner.js');

function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}

async function announceDinner () {
    let meal = await brainstormDinner();

    console.log(`I'm going to make ${meal} for dinner.`);
}

//announceDinner();