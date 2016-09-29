'use strict'

const stringsAndRegularExpressions = require('../stringsAndRegularExpressions');

describe('Ch2. Strings and Regular Expressions Unit Test Suit', function() {
    describe('UTF-16 Code Points', function() {
        describe('ECMAScript5 UTF-16 Support - getECMAScript5Text()', function() {
            const getECMAScript5Text = stringsAndRegularExpressions.getECMAScript5Text;

            it('should return a String 2 length long', function() {                
                expect(getECMAScript5Text().length).toBe(2);                
            });

            it('should return a String that do not match with any single character', function() {
                expect(/^.$/.test(getECMAScript5Text())).toBe(false);                            
            });

            it('should return a String whose individual characters are non-printable', function() { 
                const regExpForNonPrintableChars = new RegExp('[^\x20-\x7E]+');

                expect(regExpForNonPrintableChars.test(getECMAScript5Text().charAt(0))).toBe(true);
                expect(regExpForNonPrintableChars.test(getECMAScript5Text().charAt(1))).toBe(true);
                
            });

            it('should return a String that have 55362 and 57271 char codes respectvelly', function() {
                expect(getECMAScript5Text().charCodeAt(0)).toBe(55362);
                expect(getECMAScript5Text().charCodeAt(1)).toBe(57271);                
            });
        });

        describe('ECMAScript6 UTF-16 Support', function() {
            describe('Code points handling - getECMAScript6Text()', function() {
                const getECMAScript6Text = stringsAndRegularExpressions.getECMAScript6Text;

                it('should return a 3 length long String', function() {
                    expect(getECMAScript6Text().length).toBe(3);
                });

                it('should return a String that have 134071, 57271 and 97 chars code point respectvelly', function() {
                    expect(getECMAScript6Text().codePointAt(0)).toBe(134071);
                    expect(getECMAScript6Text().codePointAt(1)).toBe(57271);
                    expect(getECMAScript6Text().codePointAt(2)).toBe(97);
                });
            });

            describe('How to determine if a character is represented by one or two code points - is32Bit()', function() {
                const is32Bit = stringsAndRegularExpressions.is32Bit;

                it('should return true for `𠮷`', function() {
                    expect(is32Bit('𠮷')).toBe(true);
                });

                it('should return false for `a`', function() {
                    expect(is32Bit('a')).toBe(false);
                })
            });

            describe('You can get a String from a codePoint - getTextFor()', function() {
                const getTextFor = stringsAndRegularExpressions.getTextFor;

                it('should return the `𠮷` String for 134071 code point', function() {
                    expect(getTextFor(134071)).toBe('𠮷');
                });
            });
            
            describe('Some characters can be considered canonically equal when normalized - compare()', function() {
                const compare = stringsAndRegularExpressions.compare;

                it('should return 0 (equal) to the comparation between `\u212b` (\\u212b) and `\u00c5` (\\u00c5)', function() {
                    expect(compare('\u212b', '\u00c5')).toBe(0);
                });
            });            
        });

        describe('Regular Expressions support to Unicode', function() {
            describe('RegExp `u` flag use - getAUnicodeText()', function() {
                const getAUnicodeText = stringsAndRegularExpressions.getAUnicodeText;

                it('should return a String 2 length long', function() {
                    expect(getAUnicodeText().length).toBe(2);
                });

                it('should return a String that do not match with `/^.$/`', function() {
                    expect(/^.$/.test(getAUnicodeText)).toBe(false);
                });

                it('should return a String that match with `/^.$/u`', function() {
                    expect(/^.$/u.test(getAUnicodeText())).toBe(true);
                });
            });

            describe('Counting code points in a String - codePointLength()', function() {
                const codePointLength = stringsAndRegularExpressions.codePointLength;

                it('Must return 3 code points for both `abc` and `𠮷bc` strings', function() {
                    var stringWithRegularCharacters = 'abc';
                    const stringWithSpecialCharacters = '𠮷bc';

                    expect(stringWithRegularCharacters.length).toBe(3);
                    expect(stringWithSpecialCharacters.length).toBe(4);

                    expect(codePointLength(stringWithRegularCharacters)).toBe(3);
                    expect(codePointLength(stringWithSpecialCharacters)).toBe(3);
                });
            });

            describe('Checking if JavaScriptEngine supports a RegExp flag - hasRegExpSupportFor(flag)', function() {
                const hasRegExpSupportFor = stringsAndRegularExpressions.hasRegExpSupportFor;

                it('should return true for `g` flag', function() {
                    expect(hasRegExpSupportFor('g')).toBe(true);
                });

                it('should return false for `t` flag', function() {
                    expect(hasRegExpSupportFor('t')).toBe(false);
                });
            });

            describe('Methods for identifying substrings - getMessage()', function() {
                const getMessage = stringsAndRegularExpressions.getMessage;
                const message = getMessage();

                it('should return a string starting with `Hello`', function() {
                    expect(message.startsWith('Hello')).toBe(true);
                });

                it('should return a string that ends with `!`', function() {
                    expect(message.endsWith('!')).toBe(true);
                });

                it('should return a string that includes `o`', function() {
                    expect(message.includes('o')).toBe(true)
                });

                it('should return a string that, excluding first 4 chars, the result substring starts with `o`', function() {
                    expect(message.startsWith('o', 4)).toBe(true);
                });

                it('should return a string which have the 8 initial char substring ends with `o`', function() {
                    expect(message.endsWith('o', 8)).toBe(true);
                });

                it('shoul return a string that doesn`t include the `o` in its last 4 chars substring', function() {
                    expect(message.includes('o', 8)).toBe(false);
                });
            });

            describe('The repeat method - ident(string, level, numberOfSpaces)', function() {
                const ident = stringsAndRegularExpressions.ident;

                it('should return `noident`', function() {
                    const string = 'noident';
                    const level = 0;
                    const numberOfSpaces = 2
                    const returnedValue = ident(string, level, numberOfSpaces);

                    expect(returnedValue).toEqual(string);
                });

                it('should return `  level1identedwith2space`', function() {
                    const string = 'level1identedwith2space';
                    const level = 1;
                    const numberOfSpaces = 2;

                    const returnedValue = ident(string, level, numberOfSpaces);
                    const expectedValue = '  ' + string;

                    expect(returnedValue).toEqual(expectedValue);
                });
            });

            describe('The regular expression `y` flag - match(text, pattern)', function() {
                const match = stringsAndRegularExpressions.match;

                it('should match hello1 with pattern /hello\d\s?/', function() {
                    const text = 'hello1 hello2 hello3';
                    const pattern = /hello\d\s?/;

                    const result = match(text, pattern);

                    expect(result[0]).toEqual('hello1 ');
                });
            });
        });
    });
});