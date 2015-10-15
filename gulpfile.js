var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    minifyCss = require('gulp-minify-css'), // Minify
    sass      = require('gulp-sass');       // Conversion des SCSS en CSS


// Sass → CSS
gulp.task('css', function() {
    return gulp.src('./src/*.scss')    // Prend en entrée les fichiers *.scss
        .pipe(sass())                 // transform le sass en css
        .pipe(gulp.dest('./dist/'));  // Sauvegarde le tout dans /src/style
});

// CSS → Min CSS
gulp.task('minify-css', function() {
  return gulp.src('./dist/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
    gulp.watch('./src/*.scss', ['css']);
    gulp.watch('./dist/*.css', ['minify-css']);
});

// Default Task
gulp.task('default', ['css', 'minify-css', 'watch']);