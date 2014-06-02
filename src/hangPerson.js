function hangPerson(dictionary) {
    this.dictionary = dictionary;
    this.word = this.randomWord();
    this.currentGuess = this.word.replace(/./g, '_');
}

hangPerson.prototype = {
    secretWord: function secretWord() {
        return this.word;
    },
    randomWord: function randomWord() {
        return this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    },
    displayWord: function displayWord() {
        return this.currentGuess;
    }
};
