var nunjucksRender  = require('gulp-nunjucks-render'),
    browserSync     = require('browser-sync'),
    gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    data            = require('gulp-data'),
    imagemin        = require('gulp-imagemin'),
    cache           = require('gulp-cache'),
    del             = require('del');

// Clean Dist
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// Browser Sync
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public'
    },
  })
})

// Sass
gulp.task('sass', function() {
  return gulp.src('source/sass/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Image Optimizer

// For some weird reason, this creates a folder named "img" in the dist folder. 
gulp.task('images', function(){
  return gulp.src('source/static/images/**/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('public/images'))
});

// Nunjucks
gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['source/templates/']);

  // Gets .html and .nunjucks files in pages
  return gulp.src('source/templates/**/*.+(html|nunjucks)')
  // Adding data to Nunjucks
  .pipe(data(function() {
    return require('./source/data/data.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender())
  // output files in app folder
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('watch', ['browserSync', 'sass', 'nunjucks', 'images'], function (){
  gulp.watch('source/sass/**/*.scss', ['sass']); 
  gulp.watch('source/templates/**/*.html', ['nunjucks']);
  gulp.watch('source/static/images/**/*', ['images']);
  // Other watchers
});