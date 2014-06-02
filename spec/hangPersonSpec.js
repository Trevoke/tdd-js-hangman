describe("hangPerson", function() {
    var testWords = ["banana", "ananas", "grapefruit"];
    var hangMan = new hangPerson(testWords);
    it("should give me one of many words", function() {
        var secretWord = hangMan.secretWord();
        var words = hangMan.words;
        expect(words).toContain(secretWord);
    });
    it("should display all underscores when the word has not been guessed", function() {
        var displayedWord = hangMan.displayWord();
        expect(displayedWord.length).toEqual(hangMan.secretWord().length);
        var allUnderscores = displayedWord.split('').every(function(element) { return element == "_"; });
        expect(allUnderscores).toBe(true);
    });
});
