const assert = require('assert');

const Calculate =  require('../calculate')

describe('Calculate', () => {

    describe('.sum',() => {

        it('returns the sum of of a list\'s items', () => {

            //SETUP:
            const input = [1, 2, 3];

            //This is the EXPECTED output.
            const expected = 6;


            //EXERCISE: Calls a function, stores the output in a variable. This is the ACTUAL output.

            const actual = Calculate.sum(input);

            //VERIFY: Uses an 'assert' method to compare the ACTUAL output with the EXPECTED output.
            assert.strictEqual(actual, expected);
        });

        it('returns the sum of a four-item list.', () => {
            //SETUP
            const input=[4, 5, 6, 7];

            const expected = 22;

            //EXERCISE

            const actual = Calculate.sum(input);

            //VERIFY

            assert.strictEqual(actual, expected);
        });

        it('returns zero for an empty array', () => {

            //SETUP

            const expectedResult = 0;

            const inputArray = [];



            //EXERCISE

            const result = Calculate.sum(inputArray);

            //VERIFY

            assert.strictEqual(result, expectedResult);

        });
    });
});