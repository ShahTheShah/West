'use strict';

const Styles = () => app.gulp.src(app.path.source.styles)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'Styles',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.if(app.isDev, app.sourceMaps.init()))
    .pipe(app.sass())
    .pipe(app.autoprefixer({
        grid   :  true,
        cascade: false,
    }))
    .pipe(app.replace(/@images\//g,       '../images/'))
    .pipe(app.replace(/@libraries\//g, '../libraries/'))
    .pipe(app.groupMedia())
    .pipe(app.if(app.isBuild, app.clean()))
    .pipe(app.rename({
        suffix: '.min',
        end   : '.css',
    }))
    .pipe(app.if(app.isDev, app.sourceMaps.write('./')))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.browserSync.stream());

export default Styles;