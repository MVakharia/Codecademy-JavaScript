let promise3 = {};

//Apparently, this is valid JavaScript.
promise3
    .then ((resolvedValue) => {
        console.log(resolvedValue);
    })
    .then(null, (rejectionReason) => {
        console.log(rejectionReason);
    });

let promise4 = {};

promise4
    .then((resolvedValue) => {
        console.log(resolvedValue);
    })
    .catch((rejectionReason) => {
        console.log(rejectionReason);
    });

