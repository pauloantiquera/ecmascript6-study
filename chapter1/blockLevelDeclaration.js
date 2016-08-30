'use strict'
const letDeclaration = require('./letDeclaration');
const constDeclaration = require('./constDeclaration');
const letDeclarationInLoops = require('./letDeclarationInLoops');
const constDeclarationInLoops = require('./constDeclarationInLoops');

var blockLevelDeclarationModule = {
    getValue: letDeclaration.getValue,
    getMaxItems: constDeclaration.getMaxItems,
    setMaxItems: constDeclaration.setMaxItems,
    person: constDeclaration.person,
    setPersonName: constDeclaration.setPersonName,
    countTo: letDeclarationInLoops.countTo,
    visitObjectFields: constDeclarationInLoops.visitObjectFields,
    repeat: constDeclarationInLoops.repeat
};

module.exports = blockLevelDeclarationModule;