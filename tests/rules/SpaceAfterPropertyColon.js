import test from 'tape';
import { testValid, testInvalid } from '../../src/util';

test('SpaceAfterPropertyColon', function (t) {
    t.plan(1);

    t.test('when one space is preferred', function(t) {
        t.plan(5);

        const expectOne = {
            'SpaceAfterPropertyColon': {
                enabled: true,
                convention: 'one_space',
            }
        };

        testInvalid(t, expectOne, 'p { margin:0; }', 'when the colon after a property is not followed by space');
        testInvalid(t, expectOne, 'p { color:#eee }', 'when colon after property is not followed by space and the semicolon is missing');
        testValid(t, expectOne, 'p { color: red; }', 'when the colon after a property is followed by a space');
        testValid(t, expectOne, 'p { color : red; }', 'when the colon after a property is surrounded by spaces')
        testInvalid(t, expectOne, 'p { color:  red; }', 'when the colon after a property is followed by multiple spaces')

        // @TODO Add more tests!
    });
});
