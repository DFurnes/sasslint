import Runner from './Runner';

export function testValid(t, rules, source, message = '`' + source + '` should be valid.') {
    const runner = new Runner({ "rules": rules });
    t.ok(runner.lint(source).length === 0, message);
}

export function testInvalid(t, rules, source, message = '`' + source + '` should be invalid.') {
    const runner = new Runner({ "rules": rules });
    t.notOk(runner.lint(source).length === 0, message);
}
