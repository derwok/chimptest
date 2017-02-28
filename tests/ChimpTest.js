
describe('Chimp', function () {
    beforeEach("Prepare tests", function () {
        browser.url("http://localhost:3000");
    });


    it('can click on existing selector', function () {
        browser.click("#theButton");
    });

    it('can not click on non-existing selector', function () {
        browser.click("#DOES_NOT_EXIST");
    });
});
