'use strict';

let firstBuildReady = false;

const Scripts = callback => app.gulp.src(app.path.source.scripts)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'Scripts',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.vinylNamed())
    .pipe(app.webpackStream({
        watch: app.isDev,
        output: {
            filename: '[name].min.js'
        },
        mode: app.isDev ? 'development' : 'production'
    }, null, (err, status) => {
        firstBuildReady = true;

        if (err) return;

        console.log(status.toString({ colors: true }));
    }))
    .pipe(app.gulp.dest(app.path.build.scripts))
    .on('data', () => firstBuildReady ? callback() : 0)
    .pipe(app.browserSync.stream());

export default Scripts;