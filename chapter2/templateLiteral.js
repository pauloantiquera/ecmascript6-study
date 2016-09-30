function getHelloWorldTemplateLiteral() {
    return `Hello world!`;
}

function getAMultilineString() {
    return `Multiline
string`
}

function sayHelloTo(name) {
    return `Hello, ${name}`;
}

function makeItemsCostStatemet(count, price) {
    return `${count} items cost $${(count * price).toFixed(2)}.`;
}

function upperCaseNames(literals, ...substitutions) {
    let result = '';

    for(let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i].toUpperCase();        
    }

    result += literals[literals.length - 1];

    return result;
}

function getAMultilineStringRawValue() {
    return String.raw`Multiline\nstring`;
}

const templateLiteral = {
    getHelloWorldTemplateLiteral: getHelloWorldTemplateLiteral,
    getAMultilineString: getAMultilineString,
    sayHelloTo: sayHelloTo,
    makeItemsCostStatemet: makeItemsCostStatemet,
    upperCaseNames: upperCaseNames,
    getAMultilineStringRawValue: getAMultilineStringRawValue
};

module.exports = templateLiteral;
