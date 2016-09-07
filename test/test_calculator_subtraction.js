'use strict';

const {assert} = require('chai');
const {subtract} = require("../");

describe('subtract()', () => {
    it('should subtract positive numbers together', () => {
        assert.equal(subtract(1, 2), -1);
        assert.equal(subtract(3, 2), 1);
    });

    it('should subtract positive and negative numbers together', () => {
        assert.equal(subtract(-1, 1), -2);
        assert.equal(subtract(10, -100), 110);
    });

    it('should subtract negative numbers together', () => {
        assert.equal(subtract(-1, -1), 0);
        assert.equal(subtract(-4, -2), -2);     
    });
});