var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var cleanCSS = require('gulp-clean-css');
var rupture = require('rupture');

gulp.task('styles', function(){
    gulp.src('dist/css/**/*.styl')
        .pipe(stylus({
            use: [typographic(), nib(), rupture()]

        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch:styles', function(){
    gulp.watch('dist/css/**/*.styl', ['styles']);
});


gulp.task('minify-css', function() {
    return gulp.src('src/dist/css/style.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/min_css/'));
});

gulp.task('default', ['styles', 'watch:styles', 'minify-css']);
