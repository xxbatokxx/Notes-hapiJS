const Hapi = require('@hapi/hapi');
const routes = require('../src/notes');

const init = async () => {
    const server = Hapi.server({
        port : 8080,
        host : 'localhost',
        routes : {
            cors : {
                origin : ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`server berjalan pada ${server.info.uri}`);
}

init();