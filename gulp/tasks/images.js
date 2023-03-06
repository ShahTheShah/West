'use strict';

const Images = () => app.gulp.src(app.path.source.images)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'Images',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.if(app.isBuild, app.gulp.src(app.path.source.images)))
    .pipe(app.newer(app.path.build.images))
    .pipe(app.if(app.isBuild, app.imagemin([
        app.imageminGiflossy({
            optimizationLevel: 3,
            optimize         : 3,
            lossy            : 2,
        }),
        app.imageminPngquant({
            speed  :          5,
            quality: [0.6, 0.8],
        }),
        app.imageminZopfli({
            more: true
        }),
        app.imageminMozjpeg({
            progressive: true,
            quality    :   90,
        })
    ])))
    .pipe(app.if(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(app.browserSync.stream());

export default Images;
