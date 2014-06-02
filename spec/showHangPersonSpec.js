function hangPersonHTML(dictionary) {
    this.remainingGuessesElement = $('.remaining-guesses');
    this.hangman = new hangPerson(dictionary);
}

hangPersonHTML.prototype = {
    displayRemainingGuesses: function displayRemainingGuesses() {
        this.remainingGuessesElement.html(this.hangman.guessesRemaining);
    }
};

describe("display hangPerson on HTML page", function() {
    it("shows the remaining number of guesses", function() {
        setFixtures("<div class='remaining-guesses'></div>");
        var hangmanHTML = new hangPersonHTML(["banana"]);
        hangmanHTML.displayRemainingGuesses();
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('8');
        // put in a wrong guess
        // check that number of guesses has changed
    });
});
