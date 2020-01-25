const { randomBytes } = require('crypto');

class Deck {
    /**
     * @param {{ shuffleTimes= }} options 
     * @returns {string[]} Deck of cards
     */
    constructor({
        shuffleTimes
    } = {}) {
        this.shuffleTimes = shuffleTimes;
        return this.start();
    }

    /**
     * creates a complete deck of cards, unrandomized
     * @returns {string[]} deck of cards
     */
    create() {
        const empty = Array(52).fill();
        this.deck = empty.reduce((a, _, i) => (i % 4) ? a : [...a, empty.slice(i, i + 4)], []);
        
        for(const arr of this.deck) {
            const value = arr.map((_,i) => `${this.name(this.deck.indexOf(arr) + 1)} ${['♠️', '♣️', '♥️', '♦️'][i]}`);
            this.deck[this.deck.indexOf(arr)] = value;
        }

        this.deck = [].concat(...this.deck);
        return this.deck;
    }
 
    /**
     * converts number to card name
     * @example this.name(13); // 'King'
     * @param {number} pos Number to convert to string
     * @returns {string}
     */
    name(pos) {
        if(pos > 1 && pos < 11) return pos;
        const names = {
            1: 'Ace',
            11: 'Jack',
            12: 'Queen',
            13: 'King'
        }

        return names[pos];
    }

    /**
     * shuffles all cards in the array with a fisher-yates shuffle. also uses a better random number generator.
     * @returns {string[]}
     */
    shuffle() {
        let m = this.deck.length;

        while(m) {        
            const i = Math.floor((randomBytes(4).readUInt32BE(0) / Math.pow(2, 32)) * m--)
            const t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }

        return this.deck;
    }

    /**
     * Creates and randomized the array ``this.shuffleTimes`` amount(s) (defaults to 1).
     * @returns {string[]} Randomized card array.
     */
    start() {
        this.create();

        for(let i = 0; i < (this.shuffleTimes || 1); i++) {
            this.shuffle();
        }

        return this.deck;
    }
}

module.exports = Deck;