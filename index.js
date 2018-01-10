'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    port: 5000
});

// Add the route
server.route({
    method: 'GET',
    path:'/', 
    handler: function (request, h) {
        let response = '';

        response += 'Hello';
        console.log('place a breakpoint here!');
        response += ' World';
        return response;
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
