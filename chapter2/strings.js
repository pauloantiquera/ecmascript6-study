const substrings = require('./substrings');
const stringIdenter = require('./stringIdenter');
const templateLiteral = require('./templateLiteral');

const stringsAndRegularExpressionsModule = {
    getMessage: substrings.getMessage,
    ident: stringIdenter.ident,
    getHelloWorldTemplateLiteral: templateLiteral.getHelloWorldTemplateLiteral,
    getAMultilineString: templateLiteral.getAMultilineString,
    sayHelloTo: templateLiteral.sayHelloTo,
    makeItemsCostStatemet: templateLiteral.makeItemsCostStatemet,
    upperCaseNames: templateLiteral.upperCaseNames,
    getAMultilineStringRawValue: templateLiteral.getAMultilineStringRawValue
};

module.exports = stringsAndRegularExpressionsModule;