describe('Block-Level Declaration Unit Test Suit', function() {
    var blockLevelDeclarationModule = require('../blockLevelDeclaration');

    describe('let Declaration', function() {
        describe('A variable declared with let is accessible only in its block scope - getValue()', function() {
            let getValue = blockLevelDeclarationModule.getValue;

            it('should return blue when condition is true', function() {
                var condition = true;

                expect(getValue(condition)).toBe('blue');
            });

            it('should return green when condition is false', function() {
                var condition = false;

                expect(getValue(condition)).toBe('green');
            });
        });

    });

    describe('const Declaration', function() {
        describe('You can declare value as a const - getMaxItems()', function() {
            let getMaxItems = blockLevelDeclarationModule.getMaxItems;

            it('should return 5', function() {
                expect(getMaxItems()).toBe(5);
            });
        });

        describe('You cannot reassing a const - setMaxItems()', function() {
            let setMaxItems = blockLevelDeclarationModule.setMaxItems;

            it('should throw an error', function() {
                expect(setMaxItems).toThrow();
            });
        });

        describe('You can set a field in an object declared as a constant - setPersonName()', function() {
            let person = blockLevelDeclarationModule.person;

            it('should change person name to Reed', function() {
                expect(person).toEqual(jasmine.any(Object));
                expect(person.name).toBe('Stanis');

                var newName = 'Reed';

                blockLevelDeclarationModule.setPersonName(newName);

                expect(person.name).toEqual(newName);
            });            
        });
    });


    describe('let Declaration in Loops', function() {        
        describe('You can use let instead of var and IIFE - countTo()', function() {
            let countTo = blockLevelDeclarationModule.countTo;

            it('should count from 0 to the number provided', function() {
                expect(countTo(10)).toBe('012345678910');
            });
        });
    });

    describe('const Declaration in Loops', function() {
        describe('You can use consts in for..in statements - visitObjectFields()', function() {
            const visitObjectFields = blockLevelDeclarationModule.visitObjectFields;
            
            it('should visit (list keys) all fields of the given object', function() {
                var object = {
                    a: true,
                    b: true,
                    c: true
                };

                expect(visitObjectFields(object)).toBe('abc');
            });
        });

        describe('An error is thrown if you use a const in a regular for statement - repeat()', function() {
            const repeat = blockLevelDeclarationModule.repeat;

            it('should throw an error', function() {
                expect(repeat).toThrow();
            });
        });
    });
});