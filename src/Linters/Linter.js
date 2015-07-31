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
    static nodeTypes = [];

    /**
     * Default options.
     * @type {object}
     */
    static defaults = {};

    constructor(options = {}) {

    }

    static isInterested(node) {
        return this.nodeTypes.some(function(nodeType) {
            return nodeType === node.type;
        });
    }

    run(node) {

        // ...

    }

}

export default Linter;
