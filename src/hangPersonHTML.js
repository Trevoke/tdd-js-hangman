function hangPersonHTML(dictionary) {
    this.status = '';
    this.hangman = new hangPerson(dictionary);
}

hangPersonHTML.prototype = {
    initialize: function initialize() {
        this.submitGuessElement().on('click', this.handleUserInput.bind(this));
        this.updateDisplay();
    },
    handleUserInput: function handleUserInput(e) {
        e.preventDefault();
        var userInput = this.userInputElement().val();
        this.userInputElement().val('');
        this.guess(userInput);
    },
    updateDisplay: function updateDisplay() {
        this.displayCurrentWordState();
        this.displayRemainingGuesses();
        this.displayStatus();
    },
    submitGuessElement: function submitGuessElement() {
        return $('.user-input input[type="submit"]');
    },
    userInputElement: function userInputElement() {
        return $('.user-input input[name="guess"]');
    },
    currentWordStateElement: function currentWordStateElement() {
        return $('.current-word-state');
    },
    remainingGuessesElement: function remainingGuessesElement() {
        return $('.remaining-guesses');
    },
    statusElement: function statusElement() {
        return $('.status');
    },
    displayRemainingGuesses: function displayRemainingGuesses() {
        this.remainingGuessesElement().html(this.hangman.guessesRemaining);
    },
    displayCurrentWordState: function displayCurrentWordState() {
        this.currentWordStateElement().html(this.hangman.displayWord());
    },
    displayStatus: function displayStatus() {
        this.statusElement().html(this.status);
    },
    guess: function guess(letter) {
        this.status = this.hangman.guess(letter);
        this.updateDisplay();
    },
};
