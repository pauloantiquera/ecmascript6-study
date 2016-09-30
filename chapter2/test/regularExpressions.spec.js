'use strict'

const regularExpressions = require('../regularExpressions');

describe ('Ch2. Regular Expressiosn ES6 Support', () => {
    describe('RegExp `u` flag use - getAUnicodeText()', () => {
        const getAUnicodeText = regularExpressions.getAUnicodeText;

        it('should return a String 2 length long', () => {
            expect(getAUnicodeText().length).toBe(2);
        });

        it('should return a String that do not match with `/^.$/`', () => {
            expect(/^.$/.test(getAUnicodeText)).toBe(false);
        });

        it('should return a String that match with `/^.$/u`', () => {
            expect(/^.$/u.test(getAUnicodeText())).toBe(true);
        });
    });

    describe('Counting code points in a String - codePointLength()', () => {
        const codePointLength = regularExpressions.codePointLength;

        it('Must return 3 code points for both `abc` and `𠮷bc` strings', () => {
            var stringWithRegularCharacters = 'abc';
            const stringWithSpecialCharacters = '𠮷bc';

            expect(stringWithRegularCharacters.length).toBe(3);
            expect(stringWithSpecialCharacters.length).toBe(4);

            expect(codePointLength(stringWithRegularCharacters)).toBe(3);
            expect(codePointLength(stringWithSpecialCharacters)).toBe(3);
        });
    });

    describe('Checking if JavaScriptEngine supports a RegExp flag - hasRegExpSupportFor(flag)', () => {
        const hasRegExpSupportFor = regularExpressions.hasRegExpSupportFor;

        it('should return true for `g` flag', () => {
            expect(hasRegExpSupportFor('g')).toBe(true);
        });

        it('should return false for `t` flag', () => {
            expect(hasRegExpSupportFor('t')).toBe(false);
        });
    });

    describe('The regular expression `y` flag - match(text, pattern)', () => {
        const match = regularExpressions.match;
        const text = 'hello1 hello2 hello3';

        it('should match hello1 with pattern /hello\d\s?/y', () => {                    
            const pattern = /hello\d\s?/y;
            const result = match(text, pattern);

            expect(result[0]).toEqual('hello1 ');
        });

        it('should not match with pattern /hello\d\s?/y when lastIndex is 1', () => {
            const pattern = /hello\d\s?/y;
            pattern.lastIndex = 1;                     
            const result = match(text, pattern);

            expect(result).toBe(null);
        });
    });
});