'use strict'

let funcs = [];

function visitObjectFields(object) {
    for(const key in object) {
        funcs.push(function() {
            return key;
        });
    }

    let result = '';

    funcs.forEach(function(func) {
        result += func();
    });

    return result;
}

function repeat() {
    let result = '';

    for(const i = 0; i < 10; i++) {
        result += i;
    }

    return result;
}

var constDeclarationInLoops = {
    visitObjectFields: visitObjectFields,
    repeat: repeat
};

module.exports = constDeclarationInLoops;