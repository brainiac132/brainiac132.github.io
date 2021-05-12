const SUITS = ['S', 'H', 'D', 'C']
const RANK = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K"]
const DECK = []
const playerHand = []
const dealerHand = []

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


//Create a function to shuffle the cards (Reference: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)


function shuffle(array) {

    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random
            () * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }
    return array;

};
shuffle(DECK)
console.log(DECK)

//create a function to deal cards console.log(deck.pop), append it to a div
function dealHand() {
    if (playerHand.length == 0 && dealerHand.length == 0) {
        for (let i = 1; i <= 4; i++) {
            let cardToDeal = DECK.pop();
            console.log(cardToDeal)
            if (i % 2 == 0) {
                playerHand.push(cardToDeal)
                continue
            }
            dealerHand.push(cardToDeal)
            
        }
    }
}
dealHand()

console.log(dealerHand)
console.log (playerHand)
//create a function to connect cards to a div element
