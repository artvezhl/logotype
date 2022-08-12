import replace from "gulp-replace"; // Поиск и замена
import browserSync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления картинки
import ifPlugin from "gulp-if"; // Условие ветвления

// Экспортируем объект
export const plugins = {
    replace: replace,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}
