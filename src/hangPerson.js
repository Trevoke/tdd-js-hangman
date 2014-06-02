function hangPerson() {
    this.word = this.randomWord();
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
    }
};
