var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('watch', ['build', 'copy-bower-components'], function () {
    gulp.watch(['static/js/**/*.js',
                'static/js/**/**/*.js',
               ],
               ['build',
               'copy-bower-components',
               ]);
    gulp.watch(['static/sass/**/*.scss'],
               ['style']);
});

gulp.task('style', function () {
    return gulp.src('static/sass/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(rename(function (path) {
            path.basename = 'style';
            path.extname = '.css';
          }))
          .pipe(gulp.dest('public/css'));
});

gulp.task('build', function () {
    return gulp.src('static/js/language.js')
        .pipe(browserify({
            insertGlobal: true,
            debug: true
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('language.js'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('copy-bower-components', function() {
    return gulp.src('static/bower_components/**')
        .pipe(gulp.dest('public/libs'));
});

