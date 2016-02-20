var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var webpack     = require('webpack-stream');

var src = {
    css:  'src/**/*css',
    html: 'src/**/*.html',
    js:   'src/js/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['webpack'], function() {

    browserSync({
        server: "./src"
    });

    gulp.watch(src.js, ['webpack']);
    gulp.watch(src.html).on('change', reload);
});

// Bundle JavaScript using WebPack
gulp.task('webpack', function() {
  return gulp.src('src/js/app/*.js')
    .pipe(webpack({
      output: {
        filename: 'app.min.js'
      }
    }))
    .pipe(gulp.dest('src/js/'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
