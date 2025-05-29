var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var localhost  = 'localhost/Rippa.loc/Rippa/index.html';
// var sass = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(done) {
    gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        open: 'external',
        proxy: localhost,
        
    });

    gulp.watch('./*.scss', gulp.series('sass'));
    gulp.watch("**/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));
