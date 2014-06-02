describe("display hangPerson on HTML page", function() {
    var hangmanHTML = new hangPersonHTML(["banana"]);
    it("shows the remaining number of guesses", function() {
        setFixtures("<div class='remaining-guesses'></div>");
        hangmanHTML.initialize();
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('8');

    });
    it("updates the remaining number of guesses", function() {
        setFixtures("<div class='remaining-guesses'></div>");
        hangmanHTML.guess('x');
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('7');
    });
    it("shows all underscores at the beginning", function() {
        setFixtures("<div class='current-word-state'></div>");
        hangmanHTML.initialize();
        var currentWordState = $('.current-word-state').html();
        expect(checkAllUnderscores(currentWordState)).toBe(true);
    });
    it("shows underscores and guessed letters", function() {
        setFixtures("<div class='current-word-state'></div>");
        hangmanHTML.guess('a');
        var currentWordState = $('.current-word-state').html();
        expect(currentWordState).toEqual("_a_a_a");
    });
    it("tells you when you've won", function() {
        setFixtures("<div class='status'></div>");
        var hangmanHTML = new hangPersonHTML(["a"]);
        hangmanHTML.guess('a');
        var status = $('.status').html();
        expect(status).toEqual("You win! The word was: 'a'.");
    });
    it("tells you when you've lost", function() {
        setFixtures("<div class='status'></div>");
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        hangmanHTML.guess('x');
        var status = $('.status').html();
        expect(status).toEqual("You lose! The word was: 'banana'.");
    });
});
