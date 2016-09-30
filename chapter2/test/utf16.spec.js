'use strict'

const utf16 = require('../utf16');

describe ('Ch2. UTF-16 ES6 Support', () => {
    describe('ECMAScript5 UTF-16 Support - getECMAScript5Text()', () => {
        const getECMAScript5Text = utf16.getECMAScript5Text;

        it('should return a String 2 length long', () => {                
            expect(getECMAScript5Text().length).toBe(2);                
        });

        it('should return a String that do not match with any single character', () => {
            expect(/^.$/.test(getECMAScript5Text())).toBe(false);                            
        });

        it('should return a String whose individual characters are non-printable', () => { 
            const regExpForNonPrintableChars = new RegExp('[^\x20-\x7E]+');

            expect(regExpForNonPrintableChars.test(getECMAScript5Text().charAt(0))).toBe(true);
            expect(regExpForNonPrintableChars.test(getECMAScript5Text().charAt(1))).toBe(true);
            
        });

        it('should return a String that have 55362 and 57271 char codes respectvelly', () => {
            expect(getECMAScript5Text().charCodeAt(0)).toBe(55362);
            expect(getECMAScript5Text().charCodeAt(1)).toBe(57271);                
        });
    });

    describe('ECMAScript6 UTF-16 Support', () => {
        describe('Code points handling - getECMAScript6Text()', () => {
            const getECMAScript6Text = utf16.getECMAScript6Text;

            it('should return a 3 length long String', () => {
                expect(getECMAScript6Text().length).toBe(3);
            });

            it('should return a String that have 134071, 57271 and 97 chars code point respectvelly', () => {
                expect(getECMAScript6Text().codePointAt(0)).toBe(134071);
                expect(getECMAScript6Text().codePointAt(1)).toBe(57271);
                expect(getECMAScript6Text().codePointAt(2)).toBe(97);
            });
        });

        describe('How to determine if a character is represented by one or two code points - is32Bit()', () => {
            const is32Bit = utf16.is32Bit;

            it('should return true for `𠮷`', () => {
                expect(is32Bit('𠮷')).toBe(true);
            });

            it('should return false for `a`', () => {
                expect(is32Bit('a')).toBe(false);
            })
        });

        describe('You can get a String from a codePoint - getTextFor()', () => {
            const getTextFor = utf16.getTextFor;

            it('should return the `𠮷` String for 134071 code point', () => {
                expect(getTextFor(134071)).toBe('𠮷');
            });
        });
        
        describe('Some characters can be considered canonically equal when normalized - compare()', () => {
            const compare = utf16.compare;

            it('should return 0 (equal) to the comparation between `\u212b` (\\u212b) and `\u00c5` (\\u00c5)', () => {
                expect(compare('\u212b', '\u00c5')).toBe(0);
            });
        });            
    });
});