const SUITS = ['S', 'H', 'D', 'C']
const RANK = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K"]
const DECK = []

class Card {
    constructor(suit, rank, value, altValue = 0) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
        this.altValue = altValue;
    }
}

//Create a loop from the suits and values arrays in order to create the deck of cards.

for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < RANK.length; j++) {
        // DECK.push(SUITS[i] + VALUES[j])
        if (RANK[j] === 'J' || RANK[j] === 'K' || RANK[j] === 'Q') {
            DECK.push(new Card(SUITS[i], RANK[j], 10))
            continue;
        }

        if (RANK[j] === 'A') {
            DECK.push(new Card(SUITS[i], RANK[j], 1, 11))
            continue;
        }

        DECK.push(new Card(SUITS[i], RANK[j], parseInt(RANK[j])))
    }
}
console.log(DECK)


//Create a function to shuffle the cards

// function shuffleDeck() {
//     DECK.sort(Math.floor(Math.random() * DECK.length))
//     console.log(DECK)
// }
