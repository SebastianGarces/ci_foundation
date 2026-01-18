const server = Bun.serve({
    port: 3000,
    routes: {
        '/': () => new Response('Hello, world!'),
        '/health': () =>
            new Response(JSON.stringify({ status: 'OK' }), {
                headers: { 'content-type': 'application/json' },
                status: 200,
            }),
    },
    fetch(req) {
        return new Response('Not Found', { status: 404 });
    },
});

console.log(`Server running on ${server.url}`);
