var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default',function(){
   gulp.src('app/*.js')
       .pipe($.concat('all.js'))
       .pipe(gulp.dest('dist'))
});