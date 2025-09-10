const assert = require('assert');

const Rooster = require('../rooster');

describe('Cock-a-doodle-does.', () => {

    describe('Announcing that it\'s dawn.', () => {

        it('Returns a rooster call.', () => {

            //SETUP: This is the EXPECTED output

            let expected = 'Cock-a-doodle-doo!';

            //EXERCISE: Calls Rooster.announceDawn, stores the result in a variable. This is the ACTUAL output.

            let roosterCall = Rooster.announceDawn();

            //VERIFY: Uses an 'assert' method to compare ACTUAL and EXPECTED output.

            assert.equal(roosterCall, expected);



        });
    });

    describe ('', () => {
        it('Returns its argument as a string.', () => {
            //SETUP: This is the EXPECTED output.

            const input = 12;
            const expected = '12';

            //EXERCISE: Gets the actual output and stores it in a variable.

            const actual = Rooster.timeAtDawn(input);

            //VERIFY: Uses an 'assert' method to compare ACTUAL and EXPECTED output.

            assert.equal(actual, expected);
        });

        it('throws a range error if passed a number less than 0', () => {
            //SETUP: This is the EXPECTED output.

            const input = -1;

            const expected = RangeError;

            //EXERCISE: Gets the actual output and stores it in a variable.

            //VERIFY: Uses an 'assert' method to compare the ACTUAL output with the EXPECTED output.

            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, expected);
        });

        it('throws a range error if passed a number greater than 23', () => {
            //SETUP: This is the EXPECTED output.

            const input = 24;

            const expected = RangeError;

            //EXERCISE: Gets the actual output and stores it in a variable.

            //VERIFY: Uses an 'assert' method to compare the ACTUAL output with the EXPECTED output.

            assert.throws(() => {
                Rooster.timeAtDawn(input);
            }, expected);
        })
    });
});