/*
 * grunt-file-compare
 * https://github.com/Risto-Stevcev/grunt-file-compare
 *
 * Copyright (c) 2015 Risto Stevcev
 * Licensed under the BSD license
 */

module.exports = function(grunt) {
  grunt.registerMultiTask('file_compare', 'Grunt task to check if a set of files are equal', function() {
    var done = this.async()
    var options = this.options({
      compareBinary: 'diff'
    })

    this.files.forEach(function(file, index, files) {
      if (options.compareBinary === 'diff')
        file.src.unshift('-q')  // quiet mode

      grunt.util.spawn({
        cmd: options.compareBinary,
        args: file.src 
      }, function(error, result, code) {
        if (error) {
          grunt.log.error(result.stdout)
          grunt.fail.fatal('File compare failed.')
        }

        if (index === files.length - 1)
          done()
      })
    })
  })
}
