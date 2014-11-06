/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/layout_-_sidebar.html')
    .then(function () {
        this.viewport(400, 1000);
        phantomcss.screenshot('.sidebar-layout', 'sidebar-layout-mobile');
    })
    .then(function () {
        this.viewport(1000, 1000);
        phantomcss.screenshot('.sidebar-layout', 'sidebar-layout-desktop');
    });
