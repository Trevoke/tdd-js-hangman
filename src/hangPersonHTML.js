function hangPersonHTML(dictionary) {
    this.remainingGuessesElement = $('.remaining-guesses');
    this.hangman = new hangPerson(dictionary);
}

hangPersonHTML.prototype = {
    displayRemainingGuesses: function displayRemainingGuesses() {
        this.remainingGuessesElement.html(this.hangman.guessesRemaining);
    },
    guess: function guess(letter) {
        this.hangman.guess(letter);
    },
};
