var gulp = require('gulp');
var babel = require('babelify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var rimraf = require('rimraf');
var serve = require('gulp-serve');
var sass = require('gulp-sass');

/****************************************
  JS
*****************************************/

var bundler = browserify({
  entries: ['./src/app.js'],
  debug: true
}).transform(babel);

bundler.on('log', gutil.log); // output build logs to terminal

gulp.task('clean', function (cb) {
  rimraf('build', cb);
});

gulp.task('build', ['clean'], function () {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'));
});


/****************************************
  Servers (Web and API)
*****************************************/

gulp.task('serve', serve({
  root: ['.'],
  port: process.env.PORT || 8000
}));


/****************************************
  Sass
*****************************************/

// gulp.task('sass', function() {
//   return gulp.src('./sass/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

/****************************************
  Watch
*****************************************/

gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.js', ['build']);
  gulp.watch('./sass/*.scss', ['sass'])
})

// Default
gulp.task('default', ['watch', 'sass']);