/*
  The test scenario
*/

casper.thenOpen('http://localhost:9001/build/styleguide/component_-_blog_teaser.html')
    .then(function () {
      this.viewport(400, 1000);
        phantomcss.screenshot('.blog-teaser', 'blog-teaser-mobile');
    })
    .then(function () {
      this.viewport(1000, 1000);
      phantomcss.screenshot('.blog-teaser', 'blog-teaser-desktop');
    });
