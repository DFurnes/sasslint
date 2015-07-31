import Linter from './Linter';
import { includes } from 'lodash';

/**
 * @class BorderZero
 *
 * Prefer the terser `border: 0` over `border: none`.
 */
class BorderZero extends Linter {

    /**
     * Types of nodes that this linter is interested in.
     * @see https://github.com/DFurnes/sasstree/tree/master/src/Nodes
     * @type {Array}
     */
    static nodeTypes = ['Declaration'];

    /**
     * Default options.
     * @type {object}
     */
    static defaults = {
        convention: '0'
    };

    constructor(options = {}) {
        super(options);
    }

    run(node) {

        // @TODO: This doesn't take into account `border-left`, etc.
        if(node.property === 'border') {
            if(includes(node.value, 'none')) {
                return {
                    error: '`border: 0` is preferred over `border: none`.',
                    severity: 'warning',
                    source: node.source,
                }
            }
        }

        return null;
    }

}

export default BorderZero;
