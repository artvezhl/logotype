// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        js: `${buildFolder}/js/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        js: `${srcFolder}/js/app.js`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
