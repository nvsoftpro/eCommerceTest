'use strict';

var gulp = require('gulp'),
    filter = require('gulp-filter'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename');

var paths = gulp.paths;

gulp.task('sass', function () {
    var injectFiles = gulp.src([
         paths.css.src,
         '!' + paths.src + '/app/app.scss',
         '!' + paths.src + '/app/scss/**/*.scss',
         '!' + paths.src + '/app/**/_*.scss'], { read: false });

    var injectOptions = {
        transform: function (filePath) {
            return '@import \'' + filePath + '\';';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };

    var indexFilter = filter('app.scss');

    return gulp.src(paths.src + '/app/app.scss')
        .pipe(inject(injectFiles, injectOptions))
        .pipe(sass({
            style: 'expanded'
        }))
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(paths.css.dist))
        .pipe(minifyCss())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest(paths.css.dist));
});