# grunt-file-compare

Grunt task to check if a set of files are equal.


## Usage

    module.exports = function(grunt) {
      grunt.initConfig({
        file_compare: {
          check_suite1: ['suite1/expected/foo.js', 'suite1/actual/foo.js']  // List of files to compare
        }
      })
    
      grunt.loadNpmTask('grunt-file-compare')
      grunt.registerTask('default', ['file_compare'])
    }
    
    
## Options

**diffBinary**  
Type: `String`, Default: `'diff'`

The binary to execute when comparing files.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_


## License

Copyright (c) 2015 Risto Stevcev. Licensed under the BSD license.
