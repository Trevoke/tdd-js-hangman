function hangPerson() {
    this.word = this.randomWord();
    this.currentGuess = this.word.replace(/./g, '_');
}

hangPerson.prototype = {
    secretWord: function secretWord() {
        return this.word;
    },
    words: function words() {
        return ["word", "banana"];
    },
    randomWord: function randomWord() {
        return this.words()[Math.floor(Math.random() * this.words().length)];
    },
    displayWord: function displayWord() {
        return this.currentGuess;
    }
};
