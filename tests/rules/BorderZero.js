import test from 'tape';
import { testValid, testInvalid } from '../../src/util';

test('BorderZero', function(t) {
    t.plan(2);

    t.test('when a convention of 0 is preferred', function(t) {
        t.plan(8);

        const expectZero = {
            'BorderZero': {
                enabled: true,
                convention: '0',
            }
        };

        testValid(t, expectZero, 'p { }', 'when a rule is empty');

        testValid(t, expectZero, 'p { border: 1px solid #000; }', 'has a normal border');
        testValid(t, expectZero, 'p { border: 0; }', 'has a border of 0');
        testInvalid(t, expectZero, 'p { border: none; }', 'has a border of none');
        testInvalid(t, expectZero, 'p { border-top: none; }', 'has a border-top of none');
        testInvalid(t, expectZero, 'p { border-right: none; }', 'has a border-right of none');
        testInvalid(t, expectZero, 'p { border-bottom: none; }', 'has a border-bottom of none');
        testInvalid(t, expectZero, 'p { border-left: none; }', 'has a border-left of none');

    });

    t.test('when a convention of none is preferred', function(t) {
        t.plan(3);

        const expectNone = {
            'BorderZero': {
                enabled: true,
                convention: 'none',
            }
        };

        testValid(t, expectNone, '.test { border: none; }', 'has a border of none');
        testInvalid(t, expectNone, '.test { border: 0; }', 'has a border of 0');
        testValid(t, expectNone, '.test { border: 5px; }', 'has a normal border');
    });
});
