// const gulp = require('gulp'),
//     sass = require('gulp-sass'),
//     concat = require('gulp-concat'),
//     babel = require('gulp-babel'),
//     uglify = require('gulp-uglify'),
//     minifyCSS = require('gulp-clean-css'),
//     clean = require('gulp-clean'),
//     autoprefixer = require('gulp-autoprefixer'),
//     imageMin = require("gulp-imagemin"),
//     browserSync = require("browser-sync")
//
// const path = {
//     src: {
//         scss: "src/scss/**/*.scss",
//         js: "src/js/*.js",
//         img: "src/img/**/*",
//
//     },
//     dist: {
//         self: "dist/",
//         css: "dist/css/",
//         js: "dist/js/",
//         img: "dist/img/"
//     }
//     ,html: {
//         html: './*.html'
//     }
//
// };
//
// const imageBuilder = () => (
//     gulp.src(path.src.img)
//         .pipe(imageMin())
//         .pipe(gulp.dest(path.dist.img))
// );
//
// const scssBuilder = () => (
//     gulp.src(path.src.scss)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer())
//         .pipe(minifyCSS())
//         .pipe(concat('style.min.css'))
//         .pipe(gulp.dest(path.dist.css))
// );
//
// const cleanDist = () => (
//     gulp.src(path.dist.self, {allowEmpty: true})
//         .pipe(clean())
// );
//
// const jsBuilder = () => (
//     gulp.src(path.src.js)
//         .pipe(concat('script.min.js'))
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest(path.dist.js))
// );
//
// const watcher = () => {
//     browserSync.init({
//             server: {
//                 baseDir: './'
//             }
//         }
//     );
//     gulp.watch(path.html.html).on('change', browserSync.reload);
//     gulp.watch(path.src.scss, scssBuilder).on('change', browserSync.reload);
//     gulp.watch(path.src.js, jsBuilder).on('change', browserSync.reload);
//     gulp.watch(path.src.img, imageBuilder).on('change', browserSync.reload);
// };
//
// gulp.task('build', gulp.series(
//     cleanDist,
//     scssBuilder,
//     jsBuilder,
//     imageBuilder,
// ));
//
// gulp.task('dev', gulp.series(
//     watcher
// ));
//
// //
// gulp.task('default',gulp.series(
//     cleanDist,
//     scssBuilder,
//     jsBuilder,
//     imageBuilder,
//     watcher
// ));
