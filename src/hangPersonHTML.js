function hangPersonHTML(dictionary) {
    this.remainingGuessesElement = $('.remaining-guesses');
    this.currentWordStateElement = $('.current-word-state');
    this.hangman = new hangPerson(dictionary);
}

hangPersonHTML.prototype = {
    displayRemainingGuesses: function displayRemainingGuesses() {
        this.remainingGuessesElement.html(this.hangman.guessesRemaining);
    },
    displayCurrentWordState: function displayCurrentWordState() {
        this.currentWordStateElement.html(this.hangman.displayWord());
    },
    guess: function guess(letter) {
        this.hangman.guess(letter);
    },
};
