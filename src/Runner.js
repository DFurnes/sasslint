import Parser from 'sasstree';
import forEach from 'lodash/collection/forEach';

import BorderZero from './Linters/BorderZero';
import SpaceAfterPropertyColon from './Linters/SpaceAfterPropertyColon';

/**
 * @class Runner
 *
 * The runner is responsible for taking files, requesting
 * the AST, and passing it to interested linters.
 */
class Runner {
    constructor(config) {
        // @TODO: Load these on demand.
        const allLinters = {
            'BorderZero': BorderZero,
            'SpaceAfterPropertyColon': SpaceAfterPropertyColon,
        };

        this.linters = [];

        // Initialize linters specified in the config
        if(config.rules) {
            forEach(config.rules, (options, rule) => {
                if(options.enabled && allLinters[rule]) {
                    const linter = new allLinters[rule](rule, options);
                    linter.initialize();

                    this.linters.push(linter);
                }
            });
        }
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
            this.linters.forEach((linter) => {
                if(linter.isInterested(node)) {
                    linter.onLint = function(lint) {
                        lints.push(lint);
                    };

                    linter.run(node);
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
