/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/layout_-_sidebar.html')
    .then(function () {
        phantomcss.screenshot('.sidebar-layout', 'sidebar-layout');
    });
