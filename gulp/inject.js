'use strict';

var gulp = require('gulp'),
    sort = require('gulp-sort'),
    angularFilesort = require('gulp-angular-filesort'), 
	es = require('event-stream'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
	del = require('del');

var paths = gulp.paths;

gulp.task('inject', function (done) {
	var target = gulp.src('./start/Index.html');
	del(paths.dist +'/app/app.js');
	var vendorStream = gulp.src(paths.dist +'/**/*.js')
	.pipe(angularFilesort());
	
	var vendorStreamCss = gulp.src(paths.dist +'/**/*.css', {read: false});
	// var appStream = gulp.src([paths.src +'/app/**/*.js'])
	  // .pipe(concat('app.js'))
	  // .pipe(uglify())
	  // .pipe(gulp.dest('./dist/app'));

	var injectScripts = gulp.src(paths.src + '/app/**/*.js')
        .pipe(sort())
        .pipe(angularFilesort());
	var vendorInjectOptions = {relative: true, addRootSlash: false};

    var injectOptions = {
		starttag: 'inject:appjs -->',
		relative: true,
        addRootSlash: false,
        transform: function (filepath) {
            return '<script type="text/javascript" src="' + filepath + '?v='+paths.version+'">&#160;</script>';
        }
    };
  return target.pipe(inject(vendorStreamCss, vendorInjectOptions))
	.pipe(inject(vendorStream, vendorInjectOptions))
	.pipe(inject(injectScripts, injectOptions))
	.pipe(gulp.dest('./start'))
	.on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        });
});
