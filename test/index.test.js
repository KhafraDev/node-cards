const Deck = require('../src/deck');
const deck = new Deck({ shuffleTimes: 10 }).start();
const deck_ = new Deck().start(10);

console.assert(deck.length === deck_.length, 'both decks contain 52 cards.');
console.assert([...new Set(deck)].length === 52, 'no duplicate cards');
console.assert([...new Set(deck_)].length === 52, 'no duplicate cards');

console.log('tests are done, if you did not see a message in console, tests succeeded!');
