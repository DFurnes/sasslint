import chalk from 'chalk';
import path from 'path';
import table from 'text-table';

/**
 * Format linting errors to be output to the console.
 */
class DefaultReporter {

    constructor(lints, file) {
        this.lints = lints;
        this.file = file;
    }

    report() {
        console.log(chalk.underline(path.basename(this.file) + ':'));

        let t = [];
        this.lints.forEach(function(lint) {
            const lineRef = chalk.gray(`${lint.source.line}:${lint.source.column}`);
            const label = lint.severity === 'error' ? chalk.bold.red('error') : chalk.bold.yellow('warning');

            t.push([lineRef, label, lint.error]);
        });
        console.log(table(t));

        const errors = this.lints.filter((lint) => lint.severity === 'error');
        const warnings = this.lints.filter((lint) => lint.severity === 'warning');

        let footer = '\n';
        if(this.lints.length) {
            footer += chalk.red.bold('✖ ') + errors.length + ' errors';
        } else {
            footer += chalk.green.bold('✓ ') + 'No errors';
        }

        if(warnings.length) {
            footer += ', ' + warnings.length + ' warnings'

        }

        console.log(footer);
    }
}

export default DefaultReporter;
