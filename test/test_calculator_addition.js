'use strict';

const {assert} = require('chai');
const {add} = require("../");

describe('add()', () => {
    it('should add positive numbers together', () => {
        assert.equal(add(1, 2), 3);
        assert.equal(add(3, 2), 5);
    });

    it('should add positive and negative numbers together', () => {
        assert.equal(add(-1, 1), 0);
        assert.equal(add(10, -100), -90);
    });

    it('should add negative numbers together', () => {
        assert.equal(add(-1, -1), -2);
        assert.equal(add(-4, -2), -6);     
    });
});