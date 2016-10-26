// 引入 gulp
var gulp = require('gulp'),
 	//编译less
	less = require('gulp-less'),
	//js压缩
	uglify = require('gulp-uglify'),
	//压缩css
	minifyCSS = require('gulp-minify-css'),
	// 重命名
	rename = require('gulp-rename');

var path = {
	less:"./less/**/*.less",
	css :"./css",
	js : ["./js/**/*.js","!./js**/*.min.js"],
	jsmin:"./js"
};

// 编译Less，压缩css
gulp.task('compile', function() {
    gulp.src(path.less)
        .pipe(less())
        .pipe(gulp.dest(path.css))
        .pipe(minifyCSS())
        .pipe(rename(function(path) {
        	path.basename += ".min";
        }))
        .pipe(gulp.dest(path.css));
});
// 压缩js
gulp.task('compress', function() {
    gulp.src(path.js)
        .pipe(uglify())
        .pipe(rename(function(path){
        	path.basename += ".min";
        }))
        .pipe(gulp.dest(path.jsmin));
});

gulp.task('default', function() {
    gulp.run('compile', 'compress');
    gulp.watch(path.less, ['compile']);
    gulp.watch(path.js, ['compress']);
});

gulp.task('run', function(){
	gulp.run('compile', 'compress');
});
