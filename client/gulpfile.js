var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('watch', ['build'], function () {
    gulp.watch(['static/js/**/*.js', 'static/js/**/**/*.js'], ['build']);
});

gulp.task('build', function () {
      return gulp.src('static/js/**/*.js')
          .pipe(ngAnnotate())
          .pipe(uglify())
          .pipe(gulp.dest('public/js/'));
});

