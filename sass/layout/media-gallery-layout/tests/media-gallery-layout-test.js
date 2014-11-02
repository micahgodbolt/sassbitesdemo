/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/layout_-_media_gallery.html')
    .then(function () {
        phantomcss.screenshot('.media-gallery', 'media-gallery');
    });
