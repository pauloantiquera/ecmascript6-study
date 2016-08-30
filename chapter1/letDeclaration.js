function getValue(condition) {
    var value = 'green';

    if (condition) {
        let value = "blue";

        return value;
    }

    return value;
}

var letDeclaration = {
    getValue: getValue
}

module.exports = letDeclaration; 