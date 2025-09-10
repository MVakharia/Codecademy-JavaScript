console.log(Error('A error occurred.'));

console.log(new Error('A new error occurred.'));


try {
    throw Error('This error will be caught.');
}
catch(e) {
    console.log(e);
}

//Because the code in the 'try' block successfully throws an error, the code in the 'catch' block executes.


//Any code after this thrown error will not execute.
//throw Error('Something went wrong.');




