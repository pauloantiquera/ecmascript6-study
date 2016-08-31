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

function compare(textA, textB) {
    const normalizedTextA = textA.normalize();
    const normalizedTextB = textB.normalize();

    if (normalizedTextA === normalizedTextB) {
        return 0;
    } 

    if (normalizedTextA < normalizedTextB) {
        return -1;
    }

    if (normalizedTextA > normalizedTextB) {
        return 1;
    }
}

const utf16 = {
    getECMAScript5Text: getECMAScript5Text,
    getECMAScript6Text: getECMAScript6Text,
    is32Bit: is32Bit,
    getTextFor: getTextFor,
    compare: compare
};

module.exports = utf16;