var gulp = require('gulp');



gulp.task('default',function(){
    gulp.watch('app/**/*.js',function(event){
        console.log(event.path,event.type)
    });
});