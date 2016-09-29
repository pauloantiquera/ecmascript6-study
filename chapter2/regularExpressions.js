function getAUnicodeText() {
    const aText = '𠮷';

    return aText;
}

function codePointLength(text) {
    const result = text.match(/[\s\S]/gu);

    return result ? result.length : 0;
}

function hasRegExpSupportFor(flag) {
    try {
        var pattern = new RegExp('.', flag);

        return true
    } catch(ex) {
        return false
    }
}

function match(text, pattern) {
    return pattern.exec(text);
}

const regularExpressionsModule = {
    getAUnicodeText: getAUnicodeText,
    codePointLength: codePointLength,
    hasRegExpSupportFor: hasRegExpSupportFor,
    match: match
};

module.exports = regularExpressionsModule;