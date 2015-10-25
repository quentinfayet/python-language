var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('watch', ['build', 'copy-bower-components'], function () {
    gulp.watch(['static/js/**/*.js',
               'static/js/**/**/*.js',
               ],
               ['build',
               'copy-bower-components',
               ]);
});

gulp.task('build', function () {
    return gulp.src('static/js/**/*.js')
          .pipe(ngAnnotate())
          .pipe(uglify())
          .pipe(gulp.dest('public/js/'));
});

gulp.task('copy-bower-components', function() {
    return gulp.src('static/bower_components/**')
        .pipe(gulp.dest('public/libs'));
});

