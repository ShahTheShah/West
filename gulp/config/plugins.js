'use strict';

// Defaults
import path            from            'path';
import replace         from    'gulp-replace';
import plumber         from    'gulp-plumber';
import notify          from     'gulp-notify';
import browserSync     from    'browser-sync';
import ifPlugin        from         'gulp-if';
import { deleteAsync } from             'del';
import sourceMaps      from 'gulp-sourcemaps';

// HTML
import htmlBeautify  from  'gulp-html-beautify';
import versionNumber from 'gulp-version-number';
import pug           from            'gulp-pug';

// Styles
import rename       from                  'gulp-rename';
import clean        from               'gulp-clean-css';
import autoprefixer from            'gulp-autoprefixer';
import dartSass     from                         'sass';
import gulpSass     from                    'gulp-sass';
import svgMin       from                  'gulp-svgmin';
import groupMedia   from 'gulp-group-css-media-queries';
import newer        from                   'gulp-newer';

// Scripts
import vinylNamed    from    'vinyl-named';
import webpackStream from 'webpack-stream';

// Images
import imagemin         from     'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli   from   'imagemin-zopfli';
import imageminMozjpeg  from  'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';

// Sprites
import sprite from 'gulp-svg-sprite';

// Favicons
import favicons from 'gulp-favicons';
import filter   from   'gulp-filter';

// Fonts
import fs     from             'fs';
import fonter from    'gulp-fonter';
import woff2  from 'gulp-ttf2woff2';

// ZIP
import zip from 'gulp-zip';

const Plugins = {

    // Defaults
    path, replace, plumber, notify,
    browserSync, if: ifPlugin,
    delete: deleteAsync, sourceMaps,

    // HTML
    versionNumber, pug,
    beautify: htmlBeautify,

    // Styles
    rename, clean, newer,
    sass: gulpSass(dartSass), svgMin,
    autoprefixer, groupMedia,

    // Scripts
    vinylNamed, webpackStream,

    // Images
    imagemin, imageminPngquant,
    imageminZopfli, imageminMozjpeg,
    imageminGiflossy,

    // Sprites
    sprite,

    // Favicons
    favicons, filter,

    // ZIP
    zip,

    // Fonts
    fs, fonter, woff2
};

export default Plugins;