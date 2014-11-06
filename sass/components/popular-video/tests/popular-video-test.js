/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/component_-_popular_video.html')
    .then(function () {
        this.viewport(400, 1000);
        phantomcss.screenshot('.popular-video', 'popular-video-mobile');
    })
    .then(function () {
        this.viewport(1000, 1000);
        phantomcss.screenshot('.popular-video', 'popular-video-desktop');
    })
    .then(function () {
        this.mouse.move(".popular-video-img-container"); // Trigger :hover state
        phantomcss.screenshot('.popular-video', 'popular-video-desktop-img-hover');
    });
