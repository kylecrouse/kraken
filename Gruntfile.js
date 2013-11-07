var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            'app'
          ]
        }
      }
      heroku: {
        options: {
          base: [
            'app'
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['app/js/*.js']
    },
    less: {
      dev: {
        options: {
          paths: ['app/less/', 'app/bower_components/']
        },
        files: [{
          expand: true,
          cwd: 'app/less/',
          src: ['main.less'],
          ext: '.css',
          dest: 'app/css/'
        }]
      }
    },
    watch: {
      less: {
        files: ['app/less/**'],
        tasks: ['less']
      },
      scripts: {
        files: ['app/js/**'],
        tasks: ['jshint']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/{,*/}*.html',
          'app/css/{,*/}*.css',
          'app/js/{,*/}*.js',
          'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    }
  });

  // Load grunt tasks from NPM.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Compile LESS and JS assets for site environments.
  grunt.registerTask('default', [
    'jshint',
    'less'
  ]);

  // Start a web server.
  grunt.registerTask('server', [
    'default',
    'connect:livereload',
    'watch'
  ]);

  // Start a web server and watch for changes.
  grunt.registerTask('heroku', [
    'default',
    'connect:heroku'
  ]);
};