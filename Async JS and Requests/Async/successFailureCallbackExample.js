const promise1 = new Promise((resolve, reject) => {
    resolve('Yay!');
});

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

//Since 'promise1' resolves, 'handleSuccess' is invoked with 'promise1's resolved value, which is 'Yay!'.
//Therefore, 'Yay!' is logged to the console.
promise1.then(handleSuccess);



let promise2 = new Promise((resolve, reject) => {

    let num = Math.random();

    if(num < 0.5) {
        resolve('Yay!');
    }

    else {
        reject('Nooo!');
    }
});

const handleSuccess2 = (resolvedValue) => {
    console.log(resolvedValue);
}

const handleFailure2 = (rejectionReason) => {
    console.log(rejectionReason);
}

promise2.then(handleSuccess2, handleFailure2);

