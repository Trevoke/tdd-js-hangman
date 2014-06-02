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
    it("should display the guessed letter and all underscores", function() {
        hangMan.guess('a');
        var displayWord = hangMan.displayWord();
        expect(displayWord.split('')).toContain('a');
        expect(displayWord.split('')).toContain('_');
    });
    it("should display all the guessed letters and all underscores", function() {
        hangMan.guess('a');
        hangMan.guess('n');
        var displayWord = hangMan.displayWord();
        expect(displayWord.split('')).toContain('a');
        expect(displayWord.split('')).toContain('n');
        expect(displayWord.split('')).toContain('_');
    });
    it("penalizes you if you guess a wrong letter", function() {
        expect(hangMan.guessesRemaining).toEqual(8);
        hangMan.guess('z');
        expect(hangMan.guessesRemaining).toEqual(7);
    });
});
