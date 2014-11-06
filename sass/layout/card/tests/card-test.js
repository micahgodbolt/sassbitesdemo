/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/layout_-_card.html')
    .then(function () {
        this.viewport(600, 1000);
        phantomcss.screenshot('.card', 'card');
    });
