var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  gulp.src('assets/stylesheets/style.scss')
      .pipe(plumber())
      .pipe(sass())
      //.pipe(csso())
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/stylesheets/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
