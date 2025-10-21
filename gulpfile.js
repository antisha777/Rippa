const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Компиляция SCSS в CSS
function compileStyles() {
  return gulp.src('style.scss') // Главный файл в корне
    .pipe(sass({
      includePaths: ['scss'] // Добавляем путь к папке scss
    }).on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('docs/'))
    .pipe(browserSync.stream());
}

// Копирование HTML файлов
function copyHTML() {
  return gulp.src('index.html')
    .pipe(gulp.dest('docs/'))
    .pipe(browserSync.stream());
}

// Копирование JavaScript файлов
function copyJS() {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest('docs/js/'))
    .pipe(browserSync.stream());
}

// Оптимизация изображений с помощью сжатия
function optimizeImages() {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('docs/img/'))
    .pipe(browserSync.stream());
}

// Копирование шрифтов
function copyFonts() {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('docs/fonts/'))
    .pipe(browserSync.stream());
}

// Копирование других важных файлов
function copyOther() {
  return gulp.src(['README.md', '.gitignore', '.nojekyll'])
    .pipe(gulp.dest('docs/'));
}

// Запуск сервера и отслеживание изменений
function serve() {
  browserSync.init({
    server: {
      baseDir: './docs/'
    },
    port: 3000,
    notify: false
  });

  // Отслеживание изменений во ВСЕХ SCSS файлах
  gulp.watch('scss/**/*.scss', compileStyles);
  
  // Отслеживание изменений в HTML
  gulp.watch('*.html', copyHTML);
  
  // Отслеживание изменений в JS
  gulp.watch('js/**/*.js', copyJS);
  
  // Отслеживание изменений в изображениях
  gulp.watch('img/**/*', optimizeImages);
  
  // Отслеживание изменений в шрифтах
  gulp.watch('fonts/**/*', copyFonts);
}

// Основная задача сборки
const build = gulp.parallel(compileStyles, copyHTML, copyJS, optimizeImages, copyFonts, copyOther);

// Задача по умолчанию
exports.default = gulp.series(build, serve);

// Задача для сборки
exports.build = build;

// Задача для сервера
exports.serve = serve;