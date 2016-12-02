//引入gulp和gulp插件
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector');

//定义css、js源文件路径
var cssSrc = 'css/*.css',
    jsSrc = 'compile/*.js';


//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revCss', function() {
    return gulp.src(cssSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/css'));
});


//js生成文件hash编码并生成 rev-manifest.json文件名对照映射
gulp.task('revJs', function() {
    return gulp.src(jsSrc)
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/js'));
});


//Html替换css、js文件版本
gulp.task('revHtml', function() {
    return gulp.src(['build/**/*.json', './view/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('view'));
});


//开发构建
gulp.task('dev', function(done) {
    condition = false;
    runSequence(
        ['revCss'], ['revJs'], ['revHtml'],
        done);
});


gulp.task('default', ['dev']);