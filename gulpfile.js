const gulp = require("gulp");
const concat = require("gulp-concat");
const cleanCss = require('gulp-clean-css');
const sourcemaps = require("gulp-sourcemaps");
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const inject = require('gulp-inject');

function cssTask() {
  return gulp.src(["./stylesheets/reset.css", "./stylesheets/mobile.css", "./stylesheets/tablet.css", "./stylesheets/tablet_larger.css", "./stylesheets/desktop.css", "./stylesheets/parvus.css"])
  .pipe(concat('main.css'))
  .pipe(cleanCss({compatibility: 'ie11'}))
  .pipe(gulp.dest("./stylesheets/"))
}

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
    let sources = gulp.src(['./stylesheets/main.css','./js/main.js'], {read: false});

    return target.pipe(inject(sources))
    .pipe(gulp.dest('./'))
  }

exports.build = gulp.series(gulp.parallel(cssTask, jsTask), injectStuff);
