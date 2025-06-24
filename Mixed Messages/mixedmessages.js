

//You're building a message generator program.

//Every time you run the program, the output should be different.

//The message should be made up of at least 3 different pieces of data.

function adjective () {
    const num = Math.floor(Math.random() * 3);

    switch(num) {
        case 0: return "big";

        case 1: return "small";

        case 2: return "regular";
    }
}

function colour () {
    const num = Math.floor(Math.random() * 3);

    switch(num) {
        case 0: return "red";

        case 1: return "blue";

        case 2: return "green";
    }
}

function noun () {
    const num = Math.floor(Math.random() * 3);

    switch(num) {
        case 0: return "button";

        case 1: return "lever";

        case 2: return "wheel";
    }
}

console.log(`${adjective()} ${colour()} ${noun()}`);