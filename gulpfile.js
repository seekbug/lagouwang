let gulp = require('gulp');
let cssnano = require('gulp-cssnano');
let html = require('gulp-htmlmin');
let sass = require('gulp-sass');
let rename = require('gulp-rename');

//发布任务
function FnCopy(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
function FnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/css'));
}

//监听任务
function FnWatch(){
    gulp.watch('./src/index.html',FnCopy);
    gulp.watch('./src/css',FnCss);    
}

//导出任务
exports.copy = FnCopy;
exports.sass = FnCss;
exports.default = FnWatch;
