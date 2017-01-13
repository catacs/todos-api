'use strict';

const gulp = require('gulp');
const logwarn = require('gulp-logwarn');
const apidoc = require('gulp-apidoc');

const appCode = ['**.js', '!node_modules/**.js'];

// Checker for console.*() or debugger inside code
gulp.task('logwarn', function () {
  gulp.src(appCode)
    .pipe(logwarn(['console.log', 'debugger']));
});

gulp.task('apidoc', function(done){
  apidoc({
    src: "app/",
    dest: "docs/"
  },done);
});