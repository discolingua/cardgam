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
		let card1, card2, tmp;
		for (let i = 0; i < 1000; i++) {
			card1 = Math.floor(Math.random() * this.cards.length);
			card2 = Math.floor(Math.random() * this.cards.length);
			tmp = this.cards[card1];
			this.cards[card1] = this.cards[card2];
			this.cards[card2] = tmp;
		}
	}
}

class Player {
	constructor(name) {
		this.playerName = name;
		this.playerScore = 0;
		this.playerCards = [];
	}
}

class Board {
	constructor() {
		this.cardsInMiddle = [];
		this.players = [];
	}
	start (playerOneName, playerTwoName) {
		this.players.push(new Player(playerOneName));
		this.players.push(new Player(playerTwoName));
		let d = new Deck();
		d.createDeck();
		d.shuffleDeck();
	}
}

let gameBoard = new Board();
gameBoard.start('Rutiger', 'Jamila');