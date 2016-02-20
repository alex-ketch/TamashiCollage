var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');

var src = {
    css:  'src/css/*.css',
    html: 'src/**/*.html',
    js:   'src/js/**/*.js'
};

// Static Server + watching scss/html files
gulp.task('serve', ['concat'], function() {

    browserSync({
        server: "./src"
    });

    gulp.watch(src.js, ['concat']);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.html).on('change', reload);
});

// Bundle JavaScript using Uglify
gulp.task('concat', function() {
  return gulp.src(['src/js/app.js', 'src/js/app/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/'))
    .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);
