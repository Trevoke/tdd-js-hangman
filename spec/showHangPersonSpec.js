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
});
