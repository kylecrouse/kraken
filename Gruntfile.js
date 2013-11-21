var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      options: {
        port: 9000
      },
      dev: {
        options: {
          script: 'web/app.js'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: [
        'app/js/*.js',
        'web/*.js'
      ]
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
      express: {
        files: ['web/*.js'],
        tasks: ['express:dev'],
        options: {
          nospawn: true
        }
      },
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
          livereload: 35729
        },
        files: [
          'app/{,*/}*.html',
          'app/css/{,*/}*.css',
          'app/js/{,*/}*.js',
          'app/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'web/*.js'
        ]
      }
    }
  });

  // Load grunt tasks from NPM.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Compile LESS and JS assets for site environments.
  grunt.registerTask('default', [
    'jshint',
    'less'
  ]);

  // Start a web server and watch for changes.
  grunt.registerTask('server', [
    'default',
    'express:dev',
    'watch'
  ]);

};