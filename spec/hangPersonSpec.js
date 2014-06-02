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
        var allUnderscores = displayedWord.split('').every(function(element) { return element == "_"; });
        expect(allUnderscores).toBe(true);
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
        expect(hangManOutput).toEqual("You win! The word is => a <=");
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
        expect(hangManOutput).toEqual("You lose! The word is => a <=");
    });

});
