function hangPerson(dictionary) {
    this.dictionary = dictionary;
    this.secretWord = this.randomWord();
    this.currentGuess = this.secretWord.replace(/./g, '_');
}

hangPerson.prototype = {
    guess: function guess(letter) {
        // TODO: ensure it's just a letter and not more of the word
        if(this.secretWord.indexOf(letter) == -1) {
            return false;
        }
        var re = new RegExp('[^' + letter + ']', 'g');
        this.currentGuess = this.secretWord.replace(re, '_');
    },
    randomWord: function randomWord() {
        return this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
    },
    displayWord: function displayWord() {
        return this.currentGuess;
    }
};
