// require gulp
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    symlink = require('gulp-symlink'),
    jsFilesList = ['./src/js/characters/wolf.js',
                   './src/js/actions/wolf.js',
                   './src/js/components/wolfNavigation.js',
                   './src/js/helpers/wolfMoveEvents.js'],
    symlinkSrcList = ['./src/fonts',
                      './src/images',
                      './src/views/index.html'],
    symlinkDestList = ['./public/fonts',
                       './public/images',
                       './public/index.html'];

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

// build js file task
gulp.task('js', function() {
    gulp.src(jsFilesList)
        .pipe(concat('wolfnhare.js'))
        .pipe(gulp.dest('./public/js/'));
});

// build minified js file task
gulp.task('js:minify', function() {
    gulp.src(jsFilesList)
        .pipe(concat('wolfnhare.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

// css watch task
gulp.task('watch:less', function() {
    gulp.watch('./src/less/**/*.less', ['less'])
});

// js watch task
gulp.task('watch:js', function() {
    gulp.watch('./src/js/**/*.js', ['js'])
});

// global watch task
gulp.task('watch', ['watch:less', 'watch:js'], function () {});

// global build task
gulp.task('build', ['less', 'js'], function () {
    gulp.src(symlinkSrcList)
        .pipe(symlink(symlinkDestList));
});

// global build minified task
gulp.task('build:minify', ['less:minify', 'js:minify'], function () {
    gulp.src(symlinkSrcList)
        .pipe(symlink(symlinkDestList));
});