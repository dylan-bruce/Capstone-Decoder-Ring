// Write your tests here!
//Requiring chai expect and caesar file. 
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests written by Dylan", () => {
//If shift is 0, less than -25, greater than 25
    it("Should return false if shift = 0", () => {
        const expected = false;
        const actual = caesar('car', 0);
        expect(actual).to.equal(expected);
    });
    it("Should return false if shift is < -25", () => {
        const expected = false;
        const actual = caesar('car', -30);
        expect(actual).to.equal(expected);
    });
    it("Should return false if shift is > 25", () => {
        const expected = false;
        const actual = caesar('car', 30);
        expect(actual).to.equal(expected);
    });
//If special characters are used
    it("Shouldn't change any nonalphabetic symbols", () => {
        const expected = "tpnf tqfdjbm dibsbdufst jodmvef: !@#$%.";
        const actual = caesar("Some special characters include: !@#$%.", 1);
        expect(actual).to.equal(expected);
    });
//If all upper case, all lower case
    it("Should function with all upper case letters", () => {
        const expected = "tpnf tqfdjbm dibsbdufst jodmvef: !@#$%.";
        const actual = caesar("SOME SPECIAL CHARACTERS INCLUDE: !@#$%.", 1);
        expect(actual).to.equal(expected);
    });
    it("Should function with all lower case letters", () => {
        const expected = "tpnf tqfdjbm dibsbdufst jodmvef: !@#$%.";
        const actual = caesar("some special characters include: !@#$%.", 1);
        expect(actual).to.equal(expected);
    });
//If shift isn't entered
    it("Should return false if no shift is entered", () => {
        const expected = false;
        const actual = caesar("Car");
        expect(actual).to.equal(expected);
    });
});