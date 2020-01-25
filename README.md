# node-cards
 Create a random deck of cards.

# Benefits
* Synchronous.
* Uses better random number generator.
* No dependencies (other than ``crypto`` which is shipped with node by default).

# Quick Start
```js
const Deck = require('node-deck');

const deck = new Deck(); // or
const deck = new Deck({ shuffleTimes: 10 }); // amount of times to shuffle

```

# Tests
1. ``npm i -g mocha``
2. ``npm test``