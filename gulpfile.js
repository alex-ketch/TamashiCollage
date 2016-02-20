var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var src = {
    css:  'src/**/*css',
    html: 'src/**/*.html',
    js:   'src/js/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync({
        server: "./src"
    });

    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

gulp.task('default', ['serve']);
