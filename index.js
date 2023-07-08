let firstCard = 11;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true
    } else {
        message = "You lose"
        isAlive = false
    }

    messageEL.textContent = message
   
}

function newCard() {
    let card = 5;
    sum += card
    cards.push(card)
    console.log(cards);
    renderGame()
}


