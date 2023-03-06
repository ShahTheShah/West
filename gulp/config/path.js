'use strict';

import * as nodePath from 'path';

const
    rootFolder   = nodePath.basename(nodePath.resolve()),
    buildFolder  = './dist',
    sourceFolder = './source';

export default {
    build: {
        html     : `${buildFolder}/`                       ,
        styles   : `${buildFolder}/assets/styles/`         ,
        scripts  : `${buildFolder}/assets/scripts/`        ,
        images   : `${buildFolder}/assets/images/`         ,
        fonts    : `${buildFolder}/assets/fonts/`          ,
        libraries: `${buildFolder}/assets/libraries/`      ,
        favicons : `${buildFolder}/assets/images/favicons/`,
    },
    source: {
        html     : `${sourceFolder}/layouts/partials/*.pug`                    ,
        styles   : `${sourceFolder}/styles/partials/*.scss`                    ,
        scripts  : `${sourceFolder}/scripts/*.js`                     ,
        images   : `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        fonts    : `${sourceFolder}/assets/fonts/**/*.{ttf,woff,woff2}`        ,
        libraries: `${sourceFolder}/assets/libraries/**/*.*`                   ,
        favicon  : `${sourceFolder}/assets/images/favicon.{svg,ico}`           ,
        svgs     : `${sourceFolder}/assets/images/svgs/*.svg`                  ,
    },
    watch: {
        html   : `${sourceFolder}/layouts/**/*.pug`                                  ,
        styles : `${sourceFolder}/styles/**/*.scss`                                  ,
        scripts: `${sourceFolder}/scripts/**/*.js`                                   ,
        images : `${sourceFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        svgs   : `${sourceFolder}/assets/images/svgs/*.svg`                          ,
        env    : `${sourceFolder}/`                                                  ,
    },
    clean: buildFolder,
    buildFolder, sourceFolder,
    rootFolder
};
