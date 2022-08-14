// Основной модуль
import gulp from "gulp"
// Импорт путей
import { path } from "./gulp/config/path.js";
// Общий импорт плагинов
import { plugins } from "./gulp/config/plugins.js"

// Перемдаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js";
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { images } from './gulp/tasks/images.js';
import { ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { js } from './gulp/tasks/js.js';

// Наблюдатель за измнениями файлов
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html); // gulp.series(html, ftp) вместо html - для каждой задачи для деплоя при обновлении
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.js, js);
}

// Последовательная обработка шрифтов
// const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);
const fonts = gulp.series(ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

// Экспорт сценариев
export { dev }
export { build }

// Выполнение сценария по умолчанию
gulp.task('default', dev)
