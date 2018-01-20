const gulp = require('gulp');
const myth = require('gulp-myth');
const crass = require('gulp-crass');
const concat = require('gulp-concat');

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

gulp.task("default", ["build"], function () {
    gulp.watch(stack, ["build"]);
});
