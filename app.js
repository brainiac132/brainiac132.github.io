const SUITS = ['S', 'H', 'D', 'C']
const VALUES = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', "Q", "K"]
const DECK = []



        for (let i = 0; i < SUITS.length; i++) {
            for (let j = 0; j < VALUES.length; j++) {
                DECK.push(SUITS[i%13] + VALUES[j%13])
        }
        }
    console.log(DECK)
        
        // class Card {
        //     constructor(suit, rank, value) {
        //         this.suit = suit;
        //         this.rank = rank;
        //         this.value = value;
        //     }
        // }
        
