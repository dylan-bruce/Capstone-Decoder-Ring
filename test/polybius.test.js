// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests written by Dylan", () => {
    // ENCODE ----------------------------------------------------------------------------------------------//
    // Should work properly
    it("Should return ''", () => {
        const expected = "3251131343 2543241341";
        const actual = polybius("Hello World");
        expect(actual).to.equal(expected);
    });
    // DECODE ----------------------------------------------------------------------------------------------//
    // Should return false if input is odd
    it("Should return false if input is odd", () => {
        const expected = false;
        const actual = polybius('12345', false);
        expect(actual).to.equal(expected);
    });
    // Should work properly
    it("Should return 'hello world'", () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
});