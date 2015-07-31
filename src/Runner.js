import Parser from 'sasstree';

import BorderZero from './Linters/BorderZero';

/**
 * @class Runner
 *
 * The runner is responsible for taking files, requesting
 * the AST, and passing it to interested linters.
 */
class Runner {
    constructor() {

        this.linters = [BorderZero];

    }

    /**
     * Parse an array of tokens.
     * @param {string} scss
     * @param {object} options
     */
    lint(scss, options = {}) {
        // Start a new SassTree parser
        const parser = new Parser();

        if(options && options.bench) {
            console.time('SassTree');
        }

        // Get the AST for the given SCSS source
        const ast = parser.parse(scss, { bench: options.bench });

        if(options && options.bench) {
            console.timeEnd('SassTree');
            console.time('lint');
        }

        let lints = [];

        ast.walk((node) => {
            this.linters.forEach((Linter) => {
                if(Linter.isInterested(node)) {
                    const linter = new Linter();
                    const result = linter.run(node);

                    if(result) {
                        lints.push(result);
                    }
                }
            });

        });

        if(options && options.bench) {
            console.timeEnd('lint');
        }

        return lints;
    }

}

export default Runner;
