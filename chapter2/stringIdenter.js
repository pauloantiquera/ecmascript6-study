function ident(string, level, numberOfSpaces) {
    const space = ' ';

    const times = level * numberOfSpaces;

    return space.repeat(times) + string; 
}


const stringIdenter = {
    ident: ident
};


module.exports = stringIdenter;