import Linter from './Linter';
import includes from 'lodash/collection/includes';

const BORDER_PROPERTIES = [
    'border',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
];

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
    nodeTypes = ['Declaration'];

    /**
     * Default options.
     * @type {object}
     */
    defaults = {
        convention: '0'
    };

    run(node) {
        const bannedFormat = this.options.convention === '0' ? 'none' : '0';

        if(BORDER_PROPERTIES.includes(node.property)) {
            if(includes(node.value, bannedFormat)) {
                return {
                    error: `'border: ${this.options.convention}' is preferred over 'border: ${bannedFormat}'.`,
                    severity: 'warning',
                    source: node.source,
                }
            }
        }

        return null;
    }

}

export default BorderZero;
