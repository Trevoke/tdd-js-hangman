describe("display hangPerson on HTML page", function() {
    it("shows the remaining number of guesses", function() {
        // Have a guessRemaining element in a DOM
        // I need it to have the text 8
        setFixtures("<div class='remaining-guesses'>8</div>");
        var guessesRemainingDOMElementText = $('.remaining-guesses').html();
        expect(guessesRemainingDOMElementText).toEqual('8');
    });
});
