/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/styleguide/component_-_blog_teaser.html')
    .then(function () {
        phantomcss.screenshot('.blog-teaser', 'blog-teaser');
    });
