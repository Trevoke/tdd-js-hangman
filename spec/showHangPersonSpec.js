describe("display hangPerson on HTML page", function() {
    it("shows the remaining number of guesses", function() {
        setFixtures("<div class='remaining-guesses'></div>");
        var hangmanHTML = new hangPersonHTML(["banana"]);
        hangmanHTML.displayRemainingGuesses();
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('8');
    });
    it("updates the remaining number of guesses", function() {
        setFixtures("<div class='remaining-guesses'></div>");
        var hangmanHTML = new hangPersonHTML(["banana"]);
        hangmanHTML.displayRemainingGuesses();
        hangmanHTML.guess('x');
        hangmanHTML.displayRemainingGuesses();
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('7');
    });
    it("shows all underscores at the beginning", function() {
        setFixtures("<div class='current-word-state'></div>");
        var hangmanHTML = new hangPersonHTML(["banana"]);
        hangmanHTML.displayCurrentWordState();
        var currentWordState = $('.current-word-state').html();
        expect(checkAllUnderscores(currentWordState)).toBe(true);
    });
    it("shows underscores and guessed letters", function() {
        setFixtures("<div class='current-word-state'></div>");
        var hangmanHTML = new hangPersonHTML(["banana"]);
        hangmanHTML.displayCurrentWordState();
        hangmanHTML.guess('a');
        hangmanHTML.displayCurrentWordState();
        var currentWordState = $('.current-word-state').html();
        expect(currentWordState).toEqual("_a_a_a");
    });
});
