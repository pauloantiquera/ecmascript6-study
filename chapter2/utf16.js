function getECMAScript5Text() {
    const text = "𠮷";

    return text;
}

function getECMAScript6Text() {
    const text = "𠮷a";

    return text;
}

function is32Bit(char) {
    return char.codePointAt(0) > 0xFFFF;
}

function getTextFor(codePoint) {
    return String.fromCodePoint(codePoint);
}

const utf16 = {
    getECMAScript5Text: getECMAScript5Text,
    getECMAScript6Text: getECMAScript6Text,
    is32Bit: is32Bit,
    getTextFor: getTextFor
};

module.exports = utf16;