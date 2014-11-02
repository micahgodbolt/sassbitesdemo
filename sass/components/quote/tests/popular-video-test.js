/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/component_-_quote.html')
    .then(function () {
        phantomcss.screenshot('.quote', 'quote');
    });
