# SassLint [![NPM Version](https://img.shields.io/npm/v/sasslint.svg)](https://www.npmjs.com/sasslint)

:construction: __Under construction! Not ready for public use.__ :construction:

SassTree is a JavaScript SCSS linter, built on [SassTree](https://github.com/DFurnes/sasstree).


### Usage
As a Node module:
```js
var Runner = require('sasslint');
var runner = new Runner();
runner.lint('.test { color: red }');

```

From the command line:
```sh
npm install -g sasslint
sasstree <INPUT_FILE>
```

### Development
```sh
npm install
./bin/sasslint tests/input.scss
```
