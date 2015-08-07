import Linter from './Linter';
import includes from 'lodash/collection/includes';

const  LENGTH_UNITS = ['em', 'ex', 'ch', 'rem', 'vw', 'vh', 'vmin', 'vmax', 'cm', 'mm', 'in', 'pt', 'pc', 'px'];

const ZERO_UNIT_REGEX = /\b(0[a-z]+)\b/ig;

/**
 * @class ZeroUnit
 *
 * Checks for unnecessary units on zero values.
 */
class ZeroUnit extends Linter {

    /**
     * Types of nodes that this linter is interested in.
     * @see https://github.com/DFurnes/sasstree/tree/master/src/Nodes
     * @type {Array}
     */
    nodeTypes = ['Declaration', 'AtRule'];

    /**
     * Default options.
     * @type {object}
     */
    defaults = {
        severity: 'warning',
    };

    run(node) {
        // @TODO: This can be cleaned up when SassTree parses numbers
        const matches = node.value.match(ZERO_UNIT_REGEX);
        if(matches) {
            matches.forEach((val) => {
                // Don't report lint if this is a `.0` fractional number
                if(node.value[node.value.indexOf(val) - 1] === '.') return;

                // Only lint unitless zero on units that can be unitless
                LENGTH_UNITS.forEach((UNIT) => {
                    if(includes(val, UNIT)) {
                        this.error(node, `'${val}' should be written without units as '0'`)
                    }
                });
            });
        }
    }

}

export default ZeroUnit;
