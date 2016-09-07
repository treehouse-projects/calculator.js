'use strict';

const {assert} = require('chai');
const {divide} = require("../");

describe('divide()', () => {
    it('should divide positive numbers together', () => {
        assert.equal(divide(14, 7), 2);
        assert.equal(divide(9, 3), 3);
    });

    it('should divide positive and negative numbers together', () => {
        assert.equal(divide(-4, 2), -2);
        assert.equal(divide(100, -10), -10);
    });

    it('should divide negative numbers together', () => {
        assert.equal(divide(-1, -1), 1);
        assert.equal(divide(-4, -2), 2);     
    });
});