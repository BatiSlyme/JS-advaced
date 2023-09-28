//2 Playing cards
function cards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = {
        S: '♠', H: '♥', D: '♦', C: '♣'
    }

    if (!faces.includes(face) || !suits[suit]) {
        throw new Error('Error');
    }

    let card = {
        face,
        suit,
        toString() {
            console.log(this.face + ' ' + suits[this.suit]);
        }
    };

    return card;
}

let card = cards('a', 'S');
card.toString();