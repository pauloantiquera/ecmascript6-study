'use strict'

const maxItems = 5;
const person = {
    name: 'Stanis'
};

function getMaxItems() {
    return maxItems;
}

function setMaxItems(value) {
    maxItems = value;
}

function setPersonName(newName) {
    person.name = newName;
}

var constDeclaration = {
    getMaxItems: getMaxItems,
    setMaxItems: setMaxItems,
    person: person,
    setPersonName: setPersonName
};

module.exports = constDeclaration;