var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('uglify',function(){
   return gulp.src('app/**/*.js').pipe($.concat('app.js')).pipe($.uglify()).pipe(gulp.dest('dist/js'));
});

gulp.task('default',['uglify']);