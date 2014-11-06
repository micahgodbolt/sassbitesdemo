/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/component_-_quote.html')
    .then(function () {
        this.viewport(1000, 1000);
        phantomcss.screenshot('.quote', 'quote-mobile');
    });
