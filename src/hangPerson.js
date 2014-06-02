'use strict';
function hangPerson(dictionary) {
    this.dictionary = dictionary;
    this.secretWord = this.randomWord();
    this.initialize();
}

hangPerson.prototype = {
    initialize: function initialize() {
        this.currentGuess = this.secretWord.replace(/./g, '_');
        this.successfulGuesses = [];
        this.guessesRemaining = 8;
    },
    guess: function guess(letter) {
        this.checkGuess(letter);
        if (this.currentGuess === this.secretWord) {
            return "You win! " + this.showWord();
        }
        if (this.guessesRemaining === 0) {
            return "You lose! " + this.showWord();
        }
        return '';
    },
    showWord: function showWord() {
        return "The word was: '" + this.secretWord + "'.";
    },
    checkGuess: function checkGuess(letter) {
        // TODO: ensure it's just a letter and not more of the word
        if (this.unsuccessfulGuess(letter)) {
            this.guessesRemaining -= 1;
            return false;
        }
        this.successfulGuesses.push(letter);
        this.createNewDisplayWord();
        return true;
    },
    unsuccessfulGuess: function unsuccessfulGuess(letter) {
        return this.secretWord.indexOf(letter) === -1;
    },
    createNewDisplayWord: function createNewDisplayWord() {
        var re = new RegExp('[^' + this.successfulGuesses.join() + ']', 'g');
        this.currentGuess = this.secretWord.replace(re, '_');
    },
    randomWord: function randomWord() {
        return this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    },
    displayWord: function displayWord() {
        return this.currentGuess;
    },
    reset: function reset() {
        var newWord = this.secretWord;
        if (this.dictionary.length === 1) {
            return;
        }
        while (newWord === this.secretWord) {
            newWord = this.randomWord();
        }
        this.secretWord = newWord;
        this.initialize();
    },
    giveUp: function giveUp() {
        this.guessesRemaining = 0;
        return this.showWord();
    }
};
