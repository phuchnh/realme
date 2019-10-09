var gulp = require('gulp');
var webpack = require('webpack');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var settings = require('./settings');

gulp.task('sass',function(){
  return gulp.src(settings.themeLocation + 'assets/scss/*.scss')
              .pipe(sass())
              .on('error', swallowError)
              .pipe(gulp.dest(settings.themeLocation + 'assets/css'))
              .pipe(browserSync.reload({stream:true}));
});

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    proxy: settings.urlToPreview,
    ghostMode: false
  });

  gulp.watch([
    settings.themeLocation + 'assets/js/modules/*.js',
    settings.themeLocation + 'assets/js/scripts.js'
  ], ['waitForScripts']);
  gulp.watch(settings.themeLocation + '*.php',browserSync.reload);
  gulp.watch(settings.themeLocation + '**/*.php',browserSync.reload);
  gulp.watch(settings.themeLocation + 'assets/scss/**/*.scss', ['sass']);
  gulp.watch(settings.themeLocation + 'assets/css/**/*.css',browserSync.reload);
});

gulp.task('waitForScripts', ['scripts'], function() {
  browserSync.reload();
});

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}