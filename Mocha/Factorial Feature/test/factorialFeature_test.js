const assert = require("assert");

const Calculate = require("../factorialFeature.js");

describe('Calculate', () => {
    describe('.factorial', () => {
        it('Will pass if the output of 5! is equal to 120.', () => {

            //SETUP

            let expectedOutput = 720;

            let input = 6;

            //EXERCISE

            let actualOutput = Calculate.factorial(input);

            //VERIFY
            assert.equal(actualOutput, expectedOutput);

        });

        it('Will return 1 if the input is 0.', () => {

            //SETUP

            let expectedOutput = 1;

            let input = 0;

            //EXERCISE

            let actualOutput = Calculate.factorial(input);

            //VERIFY

            assert.equal(actualOutput, expectedOutput);

        });
    });
});