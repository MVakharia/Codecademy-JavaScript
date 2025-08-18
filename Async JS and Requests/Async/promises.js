

let someCondition;

const executorFunction = (resolve, reject) => {

    if(someCondition) {
        resolve('I resolved!');

    }else {
        reject('I rejected!');
    }

};

const myFirstPromise = new Promise(executorFunction);

const inventory = {
    sunglasses: 1900,

    pants: 1088,

    bags: 1344
}

const myExecutor = (resolve, reject) => {
    if(inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    }
    else {
        reject('That item is sold out.');
    }
}

const orderSunglasses = () => new Promise(myExecutor);

let orderPromise = orderSunglasses();

console.log(orderPromise);

const delayedHello = () => {
    console.log('Hi! This is an asynchronous greeting.');


};

//The timeout does not indicate that 'delayedHello' will go off in exactly two seconds.
//Instead, it indicates that in two seconds,
// 'delayedHello' is added to a line of code that is waiting to be run.
setTimeout(delayedHello, 2000);

const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
       setTimeout(( ) => {resolve('I resolved!')}, 1000);
    });
};

const promise0 = returnPromiseFunction();

const usingSTO = () => {
  console.log("This is a middle line of code in app.js.");

};

setTimeout(usingSTO, 420);





















//and they still feel oh so wasted on myself.