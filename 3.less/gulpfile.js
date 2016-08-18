var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('less',function(){
   return gulp.src('less/*.less').pipe($.less()).pipe(gulp.dest('dist/css'));
});

gulp.task('default',['less']);

