'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', function () {
	
    gulp.watch([
        paths.src + '/app/**/*.js'
    ], ['inject']);

    gulp.watch(paths.src + '/app/**/*.{sass,scss}', ['sass']);
});
