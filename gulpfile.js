var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    sass      = require('gulp-sass'),       // Conversion des SCSS en CSS
    plumber   = require('gulp-plumber'); // Evite l'arret de watch en cas d'erreur


// Sass → CSS
gulp.task('css', function() {
    return gulp.src('./src/*.scss')    // Prend en entrée les fichiers *.css
        .pipe(plumber())
        .pipe(sass())                   // transform le sass en css
        .pipe(gulp.dest('./dist/'));  // Sauvegarde le tout dans /src/style
});

gulp.task('watch', function() {
    gulp.watch('./src/*.scss', ['css']);
});

// Default Task
gulp.task('default', ['css', 'watch']);