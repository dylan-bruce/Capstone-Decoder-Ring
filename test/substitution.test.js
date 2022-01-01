// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe('substitution() written by Dylan', () => {
    it('Should return false if alphabet is less than 26 letters', () => {
        const expected = false;
        const actual = substitution('Hello World!', 'abc');
        expect(actual).to.equal(expected);
    });
    it('Should return false if alphabet is greater than 26 letters', () => {
        const expected = false;
        const actual = substitution('Hello World!', 'aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz');
        expect(actual).to.equal(expected);
    });
    it('Should return false if alphabet doesnt exist', () => {
        const expected = false;
        const actual = substitution('Hello World!');
        expect(actual).to.equal(expected);
    });
    it('Should encode with special characters', () => {
        const expected = 'jgnnq yqtnf';
        const actual = substitution('Hello World', '#$efghijklmnopqrstuvwxyz!@');
        expect(actual).to.equal(expected);
    });
    it('Should decode with special characters', () => {
        const expected = 'hello world';
        const actual = substitution('jgnnq yqtnf', '#$efghijklmnopqrstuvwxyz!@', false);
        expect(actual).to.equal(expected);
    });
});