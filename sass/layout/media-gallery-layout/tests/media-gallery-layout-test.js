/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/layout_-_media_gallery.html')
    .then(function () {
        this.viewport(400, 1000);
        phantomcss.screenshot('.media-gallery', 'media-gallery-mobile');
    })
    .then(function () {
        this.viewport(1000, 1000);
        phantomcss.screenshot('.media-gallery', 'media-gallery-desktop');
    });
