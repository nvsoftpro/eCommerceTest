var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('gulp-main-bower-files'),
    flatten = require('gulp-flatten'),
    rename = require("gulp-rename"),
    changed = require('gulp-changed'),
    minifyCss = require('gulp-minify-css');

var paths = gulp.paths;

gulp.task('copy-main-bower-files', function () {
    var filterJS = gulpFilter(['**/*.js', '!**/*.min.js'], { restore: true }),
        filterCss = gulpFilter(['**/*.css', '!**/*.min.css'], { restore: true }),
        filterAllJS = gulpFilter('**/*.js', { restore: true }),
        filterAllCss = gulpFilter('**/*.css', { restore: true }),
        filterFont = gulpFilter('**/*.{eot,otf,svg,ttf,woff,woff2}', { restore: true }),
        filter = gulpFilter(['**/*', '!**/*.{sass,scss,less}']);

    return gulp.src('./bower.json')
        .pipe(mainBowerFiles({
            "overrides": {
                "jquery": { "main": "dist/jquery.min.js" },
                "font-awesome": {
                    "main": ["fonts/*", "css/font-awesome.min.css"]
                },
                "angular": { "main": "angular.min.js" }
                
            }
        }))
        .pipe(filter)
        .pipe(filterJS)
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
        .pipe(filterJS.restore)
        .pipe(filterAllJS)
            .pipe(rename(function (path) {
                path.dirname = "/js";
            }))
        .pipe(filterAllJS.restore)
        .pipe(filterCss)
            .pipe(minifyCss())
            .pipe(rename({ extname: '.min.css' }))
        .pipe(filterCss.restore)
        .pipe(filterAllCss)
            .pipe(rename(function (path) {
                path.dirname = "/css";
            }))
        .pipe(filterAllCss.restore)
        .pipe(filterFont)
            .pipe(flatten())
            .pipe(rename(function (path) {
                path.dirname = "/fonts";
            }))
        .pipe(filterFont.restore)
        .pipe(gulp.dest(paths.dist + "/vendors"));
});