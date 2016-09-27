var gulp = require('gulp');

// 自动加前缀的一个NODE包
var autoprefixer = require('gulp-autoprefixer');

// 合并JS用的
var concat = require('gulp-concat');

// 压缩图片
var imagemin = require('gulp-imagemin');

// 压缩html
var htmlmin = require('gulp-htmlmin');

// 改名字（利用文件内容生成的hash名）
var rev = require('gulp-rev');

// 替换引用路径
var revCollector = require('gulp-rev-collector');

// 压缩代码
var uglify = require('gulp-uglify');

//自动加CSS webkit前缀
gulp.task('css', function () {
    // 获取需要构建的资源
    gulp.src('./css/*.css', {base: './'})
        // 通过管道的方式传递给了autoprefixer包
        .pipe(autoprefixer())
        // 把处理结果通过管道传递给了gulp.dest()
        .pipe(gulp.dest('./dist'));
});

//压缩合并JS
gulp.task('js', function() {
    return gulp.src('./js/*.js', {base: './'})
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

//监视CSS的改变,没改变一次调用一次回调方法
/*gulp.watch('./css/!*.css',function(){

});*/

//压缩图片
gulp.task('image', function () {
    return gulp.src('./images/*', {base: './'})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist'));
});

//压缩html
gulp.task('html',function(){
    return gulp.src('./*.html')
        .pipe(htmlmin({
            collapseWhitespace : true,
            minifyJS : true
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('rev',['css', 'js', 'image', 'html'], function () {
    // global语法
    return gulp.src(['./dist/**/*', '!**/*.html'], {base: './dist'})
        // 新的文件名
        .pipe(rev())
        // 存到dist
        .pipe(gulp.dest('./dist'))
        // 收集原文件名与新文件名的关系
        .pipe(rev.manifest())
        // 以json形式存入./rev目录下
        .pipe(gulp.dest('./rev'));
});


gulp.task('revCollector',['rev'], function () {
    // 根据生成的json文件，去替换html里的路径
    return gulp.src(['./rev/*.json', './dist/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('./dist'));
});


gulp.task('default',['revCollector']);