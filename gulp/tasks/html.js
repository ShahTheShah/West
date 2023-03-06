'use strict';

const HTML = () => app.gulp.src(app.path.source.html)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'HTML',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.pug())
    .pipe(app.replace(/@images\//g,       './assets/images/'))
    .pipe(app.replace(/@styles\//g,       './assets/styles/'))
    .pipe(app.replace(/@scripts\//g,     './assets/scripts/'))
    .pipe(app.replace(/@libraries\//g, './assets/libraries/'))
    .pipe(app.versionNumber({
        value: '%DT%',
        append: {
            'key': '_version',
            'cover': 0,
            'to': ['css', 'js']
        },
        output: {
            file: './gulp/version.json'
        }
    }))
    .pipe(app.beautify({
        eol: '\n',
        end_with_newline: true
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.browserSync.stream());

export default HTML;