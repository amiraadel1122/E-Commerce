var gulp = require("gulp");
//var concat = require('gulp-concat');
var sass = require('gulp-sass');
/*gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});*/
gulp.task("sass" , function(){
  return gulp.src('src/sass/scss/portfolio-single/portfolio-single.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
})
gulp.task('default',function(){
    gulp.watch('src/sass/scss/**/*.scss',['sass']);
});
