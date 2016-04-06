var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('serve', function() {
  var server = plugins.liveServer.static("./dist", 8080);
  server.start();
  gulp.watch(['*.{js,css,html}', '!{node_modules,bower_components}/**'], function() {
    server.notify.apply(server, arguments);
  });
});

gulp.task('copy', function() {
  return gulp.src(['./assets/**/*','*.html','./bower_components/**/*'],{base:'.'})
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
  return gulp.src('./js/*.js',{base:'.'})
    .pipe(plugins.changed('./dist'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
  return gulp.src('./css/*.css',{base:'.'})
    .pipe(plugins.changed('./dist'))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(plugins.shorthand())
    .pipe(gulp.dest('./dist'));
});

gulp.task('default',['copy','js','css']);
