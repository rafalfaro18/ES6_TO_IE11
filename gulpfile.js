var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");

gulp.task("default", function () {
  return gulp.src("src/index.js")
    .pipe(babel())
    .pipe(rename("main.js"))
    .pipe(gulp.dest("dist"));
});