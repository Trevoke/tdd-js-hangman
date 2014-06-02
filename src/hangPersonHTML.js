function hangPersonHTML(dictionary) {
    this.remainingGuessesElement = $('.remaining-guesses');
    this.currentWordStateElement = $('.current-word-state');
    this.statusElement = $('.status');
    this.status = '';
    this.hangman = new hangPerson(dictionary);
}

hangPersonHTML.prototype = {
    displayRemainingGuesses: function displayRemainingGuesses() {
        this.remainingGuessesElement.html(this.hangman.guessesRemaining);
    },
    displayCurrentWordState: function displayCurrentWordState() {
        this.currentWordStateElement.html(this.hangman.displayWord());
    },
    displayStatus: function displayStatus() {
        this.statusElement.html(this.status);
    },
    guess: function guess(letter) {
        this.status = this.hangman.guess(letter);
    },
};
