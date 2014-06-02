function hangPerson(words) {
    this.words = words;
    this.word = this.randomWord();
    this.currentGuess = this.word.replace(/./g, '_');
}

hangPerson.prototype = {
    secretWord: function secretWord() {
        return this.word;
    },
    randomWord: function randomWord() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    },
    displayWord: function displayWord() {
        return this.currentGuess;
    }
};
