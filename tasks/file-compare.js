/*
 * grunt-file-compare
 * https://github.com/Risto-Stevcev/grunt-file-compare
 *
 * Copyright (c) 2015 Risto Stevcev
 * Licensed under the BSD license
 */

module.exports = function(grunt) {
  grunt.registerMultiTask('file_compare', 'Grunt task to check if a set of files are equal', function() {
    function CompareError(message) {
      this.name = 'CompareError'
      this.message = message || ''
      var error = new Error(message)
      error.name = this.name
      this.stack = error.stack
    }
    CompareError.prototype = Object.create(Error.prototype)

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
        if (error)
          grunt.fail.fatal(new CompareError(result.stdout))

        if (index === files.length - 1)
          done()
      })
    })
  })
}
