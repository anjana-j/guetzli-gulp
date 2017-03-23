//load plugins
var gulp          = require('gulp'),

  /* images */
  imagemin        = require('gulp-imagemin'),
  imageminGuetzli = require('imagemin-guetzli');

  pngquant        = require('imagemin-pngquant');
  cache           = require('gulp-cache'),

  /* common */
  size            = require('gulp-size');


// images
gulp.task('images', function(){
  return gulp.src('src/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin

  .pipe(cache(imagemin({
      optimizationLevel : 3, 
      progressive       : true, 
      multipass         : true, 
      interlaced        : true,
      svgoPlugins: [
          {removeViewBox : false},
          {cleanupIDs    : false}
      ],
      use: [pngquant()] 
    })))
  .pipe(size())
  .pipe(gulp.dest('dist/assets/images'));
});



gulp.task('googleimg', function(){
  return gulp.src('src/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin

  .pipe(cache(imagemin([imageminGuetzli({quality: 95})])))
  .pipe(size())
  .pipe(gulp.dest('dist/assets/images'));
});