'use strict';

const ZIP = () => app.gulp.src(`${app.path.buildFolder}/**/*.*`)
    .pipe(app.plumber(
        app.notify.onError({
            title  : 'ZIP',
            message: 'Error: <%= error.message %>'
        })
    ))
    .pipe(app.zip(`${app.path.rootFolder}.zip`))
    .pipe(app.gulp.dest('./'));

export default ZIP;