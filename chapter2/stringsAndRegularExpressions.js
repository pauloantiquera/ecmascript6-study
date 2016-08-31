const utf16 = require('./utf16');
const regularExpressions = require('./regularExpressions');

const stringsAndRegularExpressionsModule = {
    getECMAScript5Text: utf16.getECMAScript5Text,
    getECMAScript6Text: utf16.getECMAScript6Text,
    is32Bit: utf16.is32Bit,
    getTextFor: utf16.getTextFor,
    compare: utf16.compare,
    getAUnicodeText: regularExpressions.getAUnicodeText,
    codePointLength: regularExpressions.codePointLength,
    hasRegExpSupportFor: regularExpressions.hasRegExpSupportFor
};

module.exports = stringsAndRegularExpressionsModule;