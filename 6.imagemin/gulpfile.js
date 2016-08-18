var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('copy-images',function(){
   return gulp.src('app/imgs/**/*.{png,jpg}').pipe($.imagemin()).pipe(gulp.dest('dist'));
});

gulp.task('default',['copy-images']);