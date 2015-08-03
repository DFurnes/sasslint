import Linter from './Linter';

/**
 * @class SpaceAfterPropertyColon
 *
 * Properties should be formatted with a single space separating
 * the colon from the property's value.
 */
class SpaceAfterPropertyColon extends Linter {

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
        severity: 'warning',
        // @TODO: 'style': one_space, no_space, at_least_one_space, one_space_or_newline, or aligned
    };

    run(node) {
        let whitespaceChars = 0;
        for(let i = 0; i < node.value.length; i++) {
            if(node.value[i] === ' ') {
                whitespaceChars++;
            } else {
                break;
            }
        }

        if(whitespaceChars !== 1) {
            return this.error(node, 'Colon after property should be followed by one space.');
        }


        return null;
    }

}

export default SpaceAfterPropertyColon;
