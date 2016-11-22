// require gulp
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css');

// build css file task
gulp.task('less', function() {
    gulp.src('./src/less/wolfnhare.less')
        .pipe(less())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 10'] }))
        .pipe(gulp.dest('./public/css/'));
});

// build minified css file task
gulp.task('less:minify', function() {
    gulp.src('./src/less/wolfnhare.less')
        .pipe(less())
        .pipe(autoprefixer({ browsers: ['last 2 versions', 'ie >= 10'] }))
        .pipe(minify())
        .pipe(gulp.dest('./public/css/'));
});

// css watch task
gulp.task('watch:less', function() {
    gulp.watch('./src/less/**/*.less', ['less'])
});
