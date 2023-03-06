const Server = () => app.browserSync.init({
    server: {
        baseDir: app.path.build.html
    },
    notify: false,
    port: 3000
});

export default Server;