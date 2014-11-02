/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/layout_-_card.html')
    .then(function () {
        phantomcss.screenshot('.card', 'card');
    });
