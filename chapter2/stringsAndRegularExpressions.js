const utf16 = require('./utf16');
const regularExpressions = require('./regularExpressions');
const substrings = require('./substrings');
const stringIdenter = require('./stringIdenter');

const stringsAndRegularExpressionsModule = {
    getECMAScript5Text: utf16.getECMAScript5Text,
    getECMAScript6Text: utf16.getECMAScript6Text,
    is32Bit: utf16.is32Bit,
    getTextFor: utf16.getTextFor,
    compare: utf16.compare,
    getAUnicodeText: regularExpressions.getAUnicodeText,
    codePointLength: regularExpressions.codePointLength,
    hasRegExpSupportFor: regularExpressions.hasRegExpSupportFor,
    getMessage: substrings.getMessage,
    ident: stringIdenter.ident,
    match: regularExpressions.match
};

module.exports = stringsAndRegularExpressionsModule;