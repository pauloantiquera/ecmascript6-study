function countTo(number) {
    var funcs = [];

    for (let i = 0; i <= 10; i++) {
        funcs.push(function() {
            return i;
        });
    }

    var result = '';

    funcs.forEach(function(func) {
        result += func();
    });

    return result;
}

var letDeclarationInLoops = {
    countTo: countTo
};

module.exports = letDeclarationInLoops;