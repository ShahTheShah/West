'use strict';

import gulp     from 'gulp'                    ;
import plugins  from './gulp/config/plugins.js';

import path     from './gulp/config/path.js'   ;
import HTML     from './gulp/tasks/html.js'    ;
import Styles   from './gulp/tasks/styles.js'  ;
import Scripts  from './gulp/tasks/scripts.js' ;
import Images   from './gulp/tasks/images.js'  ;
import Reset    from './gulp/tasks/reset.js'   ;
import Server   from './gulp/tasks/server.js'  ;
import Favicons from './gulp/tasks/favicons.js';
import Sprites  from './gulp/tasks/sprites.js' ;
import Fonts    from './gulp/tasks/fonts.js'   ;
import ZIP      from './gulp/tasks/zip.js'     ;

global.app = {
    ...plugins, path, gulp,
    isBuild:  process.argv.includes('--build'),
    isDev:  !process.argv.includes('--build')
};

const
    Watcher = () => {
        gulp.watch(path.watch.html,       HTML);
        gulp.watch(path.watch.styles,   Styles);
        gulp.watch(path.watch.scripts, Scripts);
        gulp.watch(path.watch.images,   Images);
        gulp.watch(path.watch.svgs,    Sprites);
    },

    mainTask = gulp.parallel(HTML, Styles, Scripts, Images, Sprites),
    FontsTask = gulp.series(Fonts.FontsElements, Fonts.FontsStyle),
    Development = gulp.series(Reset, Favicons, FontsTask, mainTask,  gulp.parallel(Watcher, Server)),
    Production = gulp.series(Reset, Favicons, FontsTask, mainTask, ZIP);

export { Development, Production };
