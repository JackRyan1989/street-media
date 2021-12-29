const gulp = require("gulp");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const inject = require('gulp-inject');

function jsTask() {
  return gulp
    .src("./js/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./js'))
  }

  function injectStuff() {
    let target = gulp.src('./index.html');
    let sources = gulp.src(['./js/main.js'], {read: false});

    return target.pipe(inject(sources))
    .pipe(gulp.dest('./'))
  }

exports.build = gulp.series(jsTask, injectStuff);
