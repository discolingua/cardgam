class Card {
	constructor(cardType, cardColor, cardValue, cardText) {
		this.cardType = cardType;
		this.cardColor = cardColor;
		this.cardValue = cardValue;
		this.cardText = cardText;
	}
}

class Deck {
	constructor() {
		this.cards = [];
	}

	createDeck() {
		let cardTypes = ['number', 'effect'];
		let cardColors = ['red', 'blue', 'green', 'yellow'];
		let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		for (let i = 0; i < cardColors.length ; i++) {
			for (let j = 0; j < cardValues.length; j++) {
				this.cards.push(new Card('number', cardColors[i], cardValues[j]));
			}
		}
	}

	shuffleDeck() {

	}
}

