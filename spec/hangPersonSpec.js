describe("hangPerson", function() {
    var testDictionary = ["banana", "ananas", "mane"];
    var hangMan = new hangPerson(testDictionary);
    it("should give me one of many words", function() {
        var secretWord = hangMan.secretWord;
        var words = hangMan.words;
        expect(testDictionary).toContain(secretWord);
    });
    it("should display all underscores when the word has not been guessed", function() {
        var displayedWord = hangMan.displayWord();
        expect(displayedWord.length).toEqual(hangMan.secretWord.length);
        expect(checkAllUnderscores(displayedWord)).toBe(true);
    });
    it("should display the checkGuessed letter and all underscores", function() {
        hangMan.checkGuess('a');
        var displayWord = hangMan.displayWord();
        expect(displayWord.split('')).toContain('a');
        expect(displayWord.split('')).toContain('_');
    });
    it("should display all the guessed letters and all underscores", function() {
        hangMan.checkGuess('a');
        hangMan.checkGuess('n');
        var displayWord = hangMan.displayWord();
        expect(displayWord.split('')).toContain('a');
        expect(displayWord.split('')).toContain('n');
        expect(displayWord.split('')).toContain('_');
    });
    it("penalizes you if you guess a wrong letter", function() {
        expect(hangMan.guessesRemaining).toEqual(8);
        hangMan.checkGuess('z');
        expect(hangMan.guessesRemaining).toEqual(7);
    });
    it("tells you if you've won", function() {
        var hangMan = new hangPerson(["a"]);
        var hangManOutput = hangMan.guess('a');
        expect(hangManOutput).toEqual("You win! The word was: 'a'.");
    });
    it("tells you if you've lost", function() {
        var hangMan = new hangPerson(["a"]);
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        var hangManOutput = hangMan.guess('b');
        expect(hangManOutput).toEqual("You lose! The word was: 'a'.");
    });
    it("can be reset to pick a new word", function() {
        oldWord = hangMan.secretWord;
        hangMan.reset();
        expect(hangMan.secretWord).not.toEqual(oldWord);
        expect(checkAllUnderscores(hangMan.displayWord())).toBe(true);
    });
    it("can give up and show the word!", function() {
        var hangMan = new hangPerson(["banana"]);
        var hangManOutput = hangMan.giveUp();
        var output = "The word was: 'banana'.";
        expect(hangManOutput).toEqual(output);
    });
});

function checkAllUnderscores(string) {
    return string.split('').every(function(element) { return element == "_"; });
}
