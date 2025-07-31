const Calculate = {

    //The first version, which I would use in practice as it's more readable.
    sumReadable(inputArray = [0]) {
        let result = 0;

        inputArray.forEach((num) => {
            result += num;
        });

        return result;

    },

    //The second version, which I was advised by Codecademy to use, which is far less readable.

    //The 'reduce' function can take two parameters and an operation involving those two parameters.
    //It performs the operation on the parameters, which become the items at index 0 and 1.
    //In this case, the operation is addition.
    //The result of the operation becomes the value at index 0.
    //At the same time, all items in the array are shifted down an index.
    //The operation is performed repeatedly until the array consists of only one item.
    //
    sum(inputArray = [0]) {

        if(inputArray.length === 0) {
            return 0;
        }

        return inputArray.reduce((x,y) => x + y);
    }
}

console.log(Calculate.sumReadable([1,2,3,4]));

console.log(Calculate.sum([5, 6, 7, 8, 9]));


module.exports = Calculate;