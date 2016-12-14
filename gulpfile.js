var gulp = require('gulp');
var del = require('del');
var path = require('path');
var plumber = require('gulp-plumber');

var src = './src',
    dist = './dist';

gulp.paths = {
    version: "1.0.0",
    src: src,
    dist: dist,
    js: {
        src: src + '/app/**/*.js',
        dist: dist + '/scripts/'
    },
    css: {
        src: src + '/app/**/*.{sass,scss}',
        dist: dist + '/css/'
    },
    fonts: {
        dist: dist + '/vendors/fonts/'
    }
}

require('require-dir')('./gulp');

gulp.task('clean', function (done) {
    return del(gulp.paths.dist, done);
});

gulp.task('appclean', function (done) {
    return del(gulp.paths.dist+'/app', done);
});

gulp.task('default', ['clean', 'watch'], function () {
    gulp.start('build');
});
