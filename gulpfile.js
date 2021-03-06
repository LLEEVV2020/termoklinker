/*=========================================*/ 
/*= галп 4 =============================== */
/*=========================================*/ 
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var babel       = require("gulp-babel");
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps =  require('gulp-sourcemaps');
var gulpconcat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});
// Compile babel into js 
gulp.task('js', function() {

    return gulp.src([
        "app/babel/polyfill_custom.js", 
        "app/babel/main.js"])
        .pipe(babel())
        .pipe(gulp.dest("app/js"));


});
// Compile babel into js 
gulp.task('j', function() {

    return gulp.src([
        "app/libs/jquery-3.2.1.min.js",
        "app/libs/bootstrap.bundle.min.js",
        "app/libs/jquery.fancybox.min.js",
        "app/libs/swiper.min.js",
        "app/js/polyfill_custom.js", 
        "app/js/main.js"])
        .pipe(gulpconcat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest("app/js"));
});


// Static Server + watching scss/html files
gulp.task('serve', gulp.parallel('sass', 'js', function() {

    browserSync.init({
        browser: 'chrome',
        server: "./app",
        notify: false
    });

    gulp.watch("app/sass/**/*.scss", gulp.series('sass'));
    gulp.watch('app/babel/*.js', gulp.series('js'))
        .on('change', browserSync.reload)
        .on('unlink', function(path, stats) {
            console.log(path);
        });
    gulp.watch("app/*.html").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));