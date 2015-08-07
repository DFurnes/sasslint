import test from 'tape-catch';
import '../assertions';

const { raw } = String;

test('ZeroUnit', function(t) {
    t.plan(11);

    const defaults = {
        'ZeroUnit': {
            enabled: true,
        }
    };

    t.isValid(defaults, 'p {}', 'when no properties exist');
    t.isValid(defaults, 'p { margin: 0; }', 'when properties with unit-less zeros exist');
    t.isValid(defaults, 'p { margin: 5px; line-height: 1.5em; }', 'when properties with non-zero values exist');
    t.isInvalid(defaults, 'p { margin: 0px; }', 'when properties with zero values contain units');
    t.isInvalid(defaults, 'p { margin: 5em 0em 2em 0px; }', 'when properties with multiple zero values containing units exist');
    t.isInvalid(defaults, 'p { margin: some-function(0em); }', 'when function call contains a zero value with units');
    t.isInvalid(defaults, 'p { @include some-mixin(0em); }', 'when mixin include contains a zero value with units');
    t.isValid(defaults, 'p { content: func("0em"); }', 'when string contains a zero value with units');
    t.isValid(defaults, 'p { margin: 4.0em; }', 'when property value has a ".0" fractional component');
    t.isValid(defaults, 'p { color: #0af; }', 'when property value has a color hex with a leading 0');
    t.isValid(defaults, 'p { transition-delay: 0s; }', 'when property with zero value is a dimension');
});
