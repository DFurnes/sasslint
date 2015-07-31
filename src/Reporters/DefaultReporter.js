import chalk from 'chalk';
import path from 'path';

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

        this.lints.forEach(function(lint) {
            const lineRef = chalk.gray(`[${lint.source.line}:${lint.source.column}]`);

            console.log(`${lineRef} ${lint.error}`)
        });

        console.log('\n' + chalk.red.bold('✖ ') + this.lints.length + ' errors');
    }
}

export default DefaultReporter;
