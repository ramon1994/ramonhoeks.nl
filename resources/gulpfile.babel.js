var gulp = require('gulp');var sass = require('gulp-sass');var cleanCSS = require('gulp-clean-css');var autoprefixer = require('gulp-autoprefixer');var plumber = require('gulp-plumber');var jshint = require('gulp-jshint');var uglify = require('gulp-uglify');var rename = require("gulp-rename");var stylish = require('jshint-stylish');var imagemin = require('gulp-imagemin');var cache = require('gulp-cache');var runSequence = require('run-sequence');var browserSync = require('browser-sync').create(); // Only for front-end// Sassgulp.task('sass', function() {    return gulp.src('src/scss/style.scss')    .pipe(plumber())    .pipe(sass.sync().on('error', sass.logError))    .pipe(autoprefixer({        browsers: ['> 5%', 'last 2 versions']    }))    .pipe(cleanCSS())    .pipe(gulp.dest('dist/css'))    .pipe(browserSync.stream());});// Javascriptgulp.task('js', ['js-hint'], function(){    return gulp.src('src/scripts/**/*.js')    .pipe(uglify())    .pipe(rename({        suffix: '.min'    }))    .pipe(gulp.dest('dist/scripts'))});// Javascript js-hintgulp.task('js-hint', function() {    return gulp.src('src/scripts/*.js')    .pipe(jshint())    .pipe(jshint.reporter('jshint-stylish'))    .pipe(jshint.reporter('fail'))});// Htmlgulp.task('html', function() {    return gulp.src('src/*.html')    .pipe(gulp.dest('dist'))});// Imagesgulp.task('images', function(){    return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')        // Caching images that ran through imagemin        .pipe(cache(imagemin({        interlaced: true    })))    .pipe(gulp.dest('dist/img'))});// Fontsgulp.task('fonts', function() {    return gulp.src('src/fonts/**/*')    .pipe(gulp.dest('dist/fonts'))});// BrowserSyncgulp.task('browserSync', function() {    browserSync.init({        server: {            baseDir: 'dist'        }    })});// Buildgulp.task('build', function (done) {    runSequence([        'sass',        'js',        'html',        'images',        'fonts'    ], done)});gulp.task('watch', function () {    gulp.watch('src/scss/**/*.scss', ['sass']);    gulp.watch('src/img/**', ['images']);    gulp.watch('src/scripts/**/*.js', ['js']).on('change', browserSync.reload);    gulp.watch('src/*.html', ['html']).on('change', browserSync.reload);});gulp.task('default', ['build', 'browserSync', 'watch'], function () {    // Put everything under watch? Or make a separated "build" command?});