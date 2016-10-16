"use strict";

var gulp =          require("gulp"),
    browserSync =   require("browser-sync"),
    sass =          require("gulp-sass"),
    sourcemaps =    require('gulp-sourcemaps'),
    notify =        require('gulp-notify');

// Compiles all gulp tasks
gulp.task("default", ["sass"]);

// Watch for file changes
gulp.task("watch", ["sass"], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("*.scss", { interval: 500 }, ["sass"]);
    gulp.watch("index.html", { interval: 500 }, ["page-reload"]);
});

// Reload page
gulp.task("page-reload", function() {
    gulp.src("index.html")
        .pipe( notify({ title: 'Page reloaded' }) )
        .pipe( browserSync.reload() );
});

// Compile SASS files
gulp.task("sass", function() {

    gulp.src("style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream())
        .pipe(notify({ message: 'Sass has been compiled and reloaded' }));
});