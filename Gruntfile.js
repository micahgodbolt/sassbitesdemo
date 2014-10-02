'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch for changes and trigger compass and livereload
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      compass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass:dev']
      },
      livereload: {
        options: {
          livereload: 1337
        },
        files: [
          'css/style.css',
          'js/*.js',
          'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Grunt Contrib Compass
    // https://github.com/gruntjs/grunt-contrib-compass
    compass: {
      options: {
        sassDir: 'sass',
        cssDir: 'css'
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compact',
        }
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', [
    'compass:dev',
    'watch'
  ]);

};











