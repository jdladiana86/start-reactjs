var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('default', function(){
  return  browserify('./source/app.js')
          .transform(reactify)
          .bundle()
          .pipe(source('snapterest.js'))

          .pipe(gulp.dest('./build/'));
});
