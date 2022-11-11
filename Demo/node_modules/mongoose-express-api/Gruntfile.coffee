module.exports = (grunt) ->
  fs = require("fs")

  exec_conf = {
    all:
      command: "mocha test/* --compilers coffee:coffee-script --require should"
  }

  files = fs.readdirSync("test")
  for file in files
    if file.match /\.coffee$/
      name = file.replace /\.coffee$/, ""
      exec_conf["test-#{name}"] = {command: "mocha test/#{file} --compilers coffee:coffee-script --require should"}

  exec_conf["doc"] = {command: "codo -n 'Mongoose Express API' -t 'Mongoose Express API Documentation'"}

  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    exec: exec_conf
    watch:
      files: ["src/**/*.coffee"]
      tasks: ["build"]

    coffee:
      dist:
        expand: true,
        cwd: './src',
        src: ['**/*.coffee'],
        dest: './dist',
        ext: '.js'
        options:
          bare: true

    clean: ["dist"]

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-exec"
  
  grunt.registerTask "build", ["clean", "coffee:dist"]

  grunt.registerTask "test", "Run tests", () ->
    if name = grunt.option("test")
      grunt.task.run "exec:#{name}"
    else
      grunt.task.run "exec:all"

  grunt.registerTask "doc", ["exec:doc"]
