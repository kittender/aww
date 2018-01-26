const gulp = require('gulp');
const myth = require('gulp-myth');
const crass = require('gulp-crass');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');

const root = './src/';
const stack = [
    root + 'settings/**/*.css',
    root + 'generic/**/*.css',
    root + 'elements/**/*.css',
];

gulp.task("build", function () {
    
    return gulp.src(stack)
        .pipe(concat('aww.css'))
        .pipe(myth())
        .pipe(crass())
        .pipe(gulp.dest('dist'));
});

gulp.task("minify", ["build"], function () {
    
    return gulp.src('dist/aww.css')
        .pipe(clean({debug: true}, (details) => {
          console.log(`aww.css: ${details.stats.originalSize}`);
          console.log(`aww-min.css: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({suffix: "-min", extname: ".css"}))
        .pipe(gulp.dest('dist'));
});

gulp.task("default", ["minify"], function () {
    
    gulp.watch(stack, ["minify"]);
});
