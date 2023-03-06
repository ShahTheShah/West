'use strict';

const Sprites = () => app.gulp.src(app.path.source.svgs)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'Sprites',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.if(app.isBuild, app.svgMin({
        fill  : false,
        js2svg: {
            pretty: true,
            indent:    4,
        }
    })))
    .pipe(app.sprite({
        shape: {
            dest: 'svgs',
        },
        mode: {
            stack: {
                sprite: '../sprite.svg',
            }
        }
    }))
    .pipe(app.gulp.dest(app.path.build.images));

export default Sprites;