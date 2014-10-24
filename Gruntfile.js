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
      includes: {
        files: ['include/**/*', 'index.html'],
        tasks: ['includes']
      },
      hologram: {
        files: ['build/css/*'],
        tasks: ['hologram']
      },
      livereload: {
        options: {
          livereload: 1337
        },
        files: [
          'build/css/style.css',
          'build/*.html',
          'build/styleguide/*.html',
          'js/*.js',
          'images/{,**/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Grunt connect
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      server: {
       options: {
        livereload: 1337,
        port: 9001,
        base: 'build/',
        open: {
          target: 'http://localhost:9001/',
        }
       }
     }
    },

    // Grunt Includes
    // https://www.npmjs.org/package/grunt-includes
    includes: {
      files: {
       src: ['*.html'], // Source files
       dest: 'build', // Destination directory
       cwd: '.',
       options: {
        includePath: 'include'
       }
     }
    },

    // Grunt Contrib Compass
    // https://github.com/gruntjs/grunt-contrib-compass
    compass: {
      options: {
        sassDir: 'sass',
        cssDir: 'build/css',
        bundleExec: true,
        require: ['sass-globbing', 'susy'],
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

    bower: {
      install: {
        options: {
          targetDir: './lib',
          cleanBowerDir: true,
        }
      }
    },

    shell: {
      bundler: {
        command: 'bundle --path lib'
      }
    },

    hologram: {
      generate: {
        options: {
          config: './hologram/hologram_config.yml'
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-hologram');

  grunt.registerTask('default', [
    'shell:bundler',
    'bower',
    'compass:dev',
    'includes',
    'hologram',
    'connect',
    'watch'
  ]);

};











