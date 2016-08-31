'use strict'

const stringsAndRegularExpressions = require('../stringsAndRegularExpressions');

describe('Strings and Regular Expressions Unit Test Suit', function() {
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
        });
    });
});