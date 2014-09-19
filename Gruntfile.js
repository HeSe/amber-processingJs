'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('amber-dev');

  // Default task.
  grunt.registerTask('default', ['amberc:all']);
  grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    // pkg: grunt.file.readJSON(''),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // task configuration
    amberc: {
      options: {
        amber_dir: path.join(__dirname, "bower_components", "amber"),
        library_dirs: ['src'],
        closure_jar: ''
      },
      all: {
        src: [
            'src/Processing-Core.st', // list all core in dependency order
            'src/Processing-HTML.st' // list all widget in dependency order
             'src/Processing-Examples.st' // list all examples in dependency order
        ],
        amd_namespace: 'amber-processingJS',
        libraries: ['SUnit', 'Web']
      },
      test_runner: {
        src: ['node_modules/amber-dev/lib/Test.st'],
        libraries: [
          /* add dependencies packages here */
          'Processing-Core', /* add other code-to-test packages here */
          'Processing-HTML', /* add other code-to-test packages here */
          'Processing-Examples', /* add other code-to-test packages here */
          'SUnit'
        ],
        main_class: 'NodeTestRunner',
        output_name: 'test_runner'
      }
    },

    execute: {
      test_runner: {
        src: ['test_runner.js']
      }
    },

    clean: {
      test_runner: ['test_runner.js']
    }
  });

};
