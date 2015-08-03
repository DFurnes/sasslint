import setDefaults from 'lodash/object/defaults';

/**
 * @class Linter
 *
 * This is the base class for all linters.
 */
class Linter {

    /**
     * Types of nodes that this linter is interested in.
     * @see https://github.com/DFurnes/sasstree/tree/master/src/Nodes
     * @type {Array}
     */
    nodeTypes = [];

    /**
     * Default options.
     * @type {object}
     */
    defaults = {};

    constructor(name, options = {}) {
        this.name = name;
        this.options = options;
    }

    initialize() {
        this.options = setDefaults(this.options, this.defaults);
    }

    isInterested(node) {
        return this.nodeTypes.some(function(nodeType) {
            return nodeType === node.type;
        });
    }

    run(node) {

        // ...

    }

    error(node, message) {
        return {
            error: message,
            severity: this.options.severity,
            linter: this.name,
            source: node.source,
        }
    }

}

export default Linter;
