const Deck = require('../src/deck');
const assert = require('assert');

const deck = new Deck();

describe('node-deck', () => {
    it('Created a deck of 52 cards', () => {
        assert.equal(deck.length, 52);
    });

    it('No duplicate cards are present', () => {
        assert.equal([...new Set(deck)].length, 52);
    });

    it('Returns an Array of strings', () => {
        assert.equal(deck instanceof Array && deck.every(c => typeof c === 'string'), true);
    });
});
