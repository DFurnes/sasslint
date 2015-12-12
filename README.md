# SassLint [![NPM Version](https://img.shields.io/npm/v/sasslint.svg)](https://www.npmjs.com/sasslint) [![wercker status](https://app.wercker.com/status/495b54c9f2897a85ca841aec75e18721/s/master "wercker status")](https://app.wercker.com/project/bykey/495b54c9f2897a85ca841aec75e18721)
:warning: __No longer maintained.__ Take a look at [stylelint](http://stylelint.io) for an alternative.

SassTree is a JavaScript SCSS linter, built on [SassTree](https://github.com/DFurnes/sasstree).

<img width="528" alt="screenshot" src="https://cloud.githubusercontent.com/assets/583202/9266993/8a2390dc-4216-11e5-99d6-42779e208a2a.png">

To install, run `npm install -g sasslint`.

### Configuration
SassLint will recursively search for a `.sasslint.json` configuration file in parent directories of the file being linted (or a configuration file can be specified with the `--config` option). See the [example config](https://github.com/DFurnes/sasslint/blob/master/tests/.sasslint.json) for details.

### Development
```sh
npm install
./bin/sasslint tests/input.scss
```
