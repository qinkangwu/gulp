var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('copy-html',function(){
   gulp.src('app/index.html')   //源文件
       .pipe(gulp.dest('dist'))  //输出目录
       .pipe($.connect.reload());  //通知浏览器刷新
});
gulp.task('watch',function(){
   gulp.watch('app/index.html',['copy-html']);
});
gulp.task('server',function(){
   $.connect.server({
      root : 'dist', //服务器根目录
      port : 8080 , //端口地址
      livereload : true
   });
});
gulp.task('default',['server','watch']);