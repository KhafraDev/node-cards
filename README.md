# node-cards
 Create a random deck of cards.

# Benefits
* Synchronous.
* Uses better random number generator.
* No dependencies (other than ``crypto`` which is shipped with node by default).

# Quick Start
```js
const Deck = require('node-deck');

const deck = new Deck();
// or
const deck = new Deck({ shuffleTimes: 10 }); // amount of times to shuffle

const cards = deck.start(/* pass a number here to override shuffleTimes */); // randomized
const cards = deck.create(); // unrandomized
```

``<Deck>.start()`` will take shuffleTimes amounts to shuffle (defaults to once) or you can pass the amount of times as a parameter.