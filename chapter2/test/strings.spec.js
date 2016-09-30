'use strict'

const strings = require('../strings');

describe('Ch2. Strings Unit Test Suit', () => {
    describe('Methods for identifying substrings - getMessage()', () => {
        const getMessage = strings.getMessage;
        const message = getMessage();

        it('should return a string starting with `Hello`', () => {
            expect(message.startsWith('Hello')).toBe(true);
        });

        it('should return a string that ends with `!`', () => {
            expect(message.endsWith('!')).toBe(true);
        });

        it('should return a string that includes `o`', () => {
            expect(message.includes('o')).toBe(true)
        });

        it('should return a string that, excluding first 4 chars, the result substring starts with `o`', () => {
            expect(message.startsWith('o', 4)).toBe(true);
        });

        it('should return a string which have the 8 initial char substring ends with `o`', () => {
            expect(message.endsWith('o', 8)).toBe(true);
        });

        it('shoul return a string that doesn`t include the `o` in its last 4 chars substring', () => {
            expect(message.includes('o', 8)).toBe(false);
        });
    });

    describe('The repeat method - ident(string, level, numberOfSpaces)', () => {
        const ident = strings.ident;

        it('should return `noident`', () => {
            const string = 'noident';
            const level = 0;
            const numberOfSpaces = 2
            const returnedValue = ident(string, level, numberOfSpaces);

            expect(returnedValue).toEqual(string);
        });

        it('should return `  level1identedwith2space`', () => {
            const string = 'level1identedwith2space';
            const level = 1;
            const numberOfSpaces = 2;

            const returnedValue = ident(string, level, numberOfSpaces);
            const expectedValue = '  ' + string;

            expect(returnedValue).toEqual(expectedValue);
        });
    });

    describe ('Template Literals', () => {
        describe ('Template literals act like regular strings - getHelloWorldTemplateLiteral()', () => {
            const templateLiteral = strings.getHelloWorldTemplateLiteral();
            
            it ('should be equal to "Hello world!" string', () => {
                expect(templateLiteral).toBe('Hello world!');
            });

            it ('should return a string typed element', () => {
                expect(templateLiteral).toEqual(jasmine.any(String));
            });

            it ('should return a 12 length long string', () => {
                expect(templateLiteral.length).toBe(12);
            });
        });

        describe ('Multiline Strings - getAMultiLineString()', () => {
            const multilineString = strings.getAMultilineString();

            it ('should return a multiline string', () => {
                const expectedResult = 'Multiline\nstring';

                expect(multilineString).toEqual(expectedResult);
            });

            it('should have 16 characters length', () => {
                expect(multilineString.length).toBe(16);
            });
        });

        describe ('Variables substitutions - sayHelloTo(name)', () => {
            const sayHelloTo = strings.sayHelloTo;

            it ('should return `Hello, Mike`', () => {
                expect(sayHelloTo('Mike')).toBe('Hello, Mike');
            });
        });

        describe ('Calculations in substitutions - makeItemsCostStatemet(count, price)', () => {
            const makeItemsCostStatemet = strings.makeItemsCostStatemet;

            it ('should be `10 items cost $2.50.`', () => {
                expect(makeItemsCostStatemet(10, 0.25)).toBe('10 items cost $2.50.');
            });
        });

        describe ('Tagged Templates - upperCaseNames', () => {
            const upperCaseNames = strings.upperCaseNames;

            it ('should return `MIKE was a good host to JANE.`', () => {
                const hostName = 'mike';
                const guestName = 'jane';
                expect(upperCaseNames`${hostName} was a good host to ${guestName}.`).toBe('MIKE was a good host to JANE.');
            });
        });

        describe ('Tagged Templates Raw Values - getAMultilineStringRawValue', () => {
            const getAMultilineStringRawValue = strings.getAMultilineStringRawValue;

            it ('should be `Multiline\\nstring`', () => {
                expect(getAMultilineStringRawValue()).toBe('Multiline\\nstring');
            });
        });
    });
});