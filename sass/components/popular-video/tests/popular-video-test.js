/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/component_-_popular_video.html')
    .then(function () {
        phantomcss.screenshot('.popular-video', 'popular-video');
    });
