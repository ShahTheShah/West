'use strict';

const Favicons = () => app.gulp.src(app.path.source.favicon)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'Favicons',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.if(app.isDev, app.svgMin({
        fill  : false,
        js2svg: {
            pretty: true,
            indent: 4
        }
    })))
    .pipe(app.if(app.isDev,   app.gulp.dest(app.path.buildFolder)))
    .pipe(app.if(app.isBuild, app.favicons({
        icons: {
            appleIcon: [
                'apple-touch-icon.png',
                'apple-touch-icon-1024x1024.png',
            ],
            favicons: [
                'favicon.ico'
            ],
            android:      false,
            online:       false,
            appleStartup: false,
            firefox:      false,
            yandex:       false,
            windows:      false,
            coast:        false,
        },
        path: './assets/images/favicons/'
    })))
    .pipe(app.if(app.isBuild, app.gulp.dest(app.path.build.favicons)))
    .pipe(app.if(app.isBuild, app.filter([
        'apple-touch-icon.png', 'favicon.ico'
    ])))
    .pipe(app.if(app.isBuild, app.gulp.dest(app.path.buildFolder)))

export default Favicons;