describe("hangPerson", function() {
    it("should give me one of many words", function() {
        var hangMan = new hangPerson();
        var secretWord = hangMan.secretWord();
        var words = hangMan.words();
        expect(words).toContain(secretWord);
    });
});
