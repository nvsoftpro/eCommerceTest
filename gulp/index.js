var gulp = require('gulp');

gulp.task('build', function () {
    gulp.start('sass', 'copy-main-bower-files');
});