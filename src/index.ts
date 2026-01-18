export const server = Bun.serve({
    port: 3000,
    routes: {
        '/': () => new Response('Hello, world!'),
        '/health': () =>
            new Response(JSON.stringify({ status: 'OK' }), {
                headers: { 'content-type': 'application/json' },
                status: 200,
            }),
        '/api/v1/': {
            GET: () =>
                new Response(
                    JSON.stringify({
                        name: 'John Doe',
                        age: 30,
                        email: 'john.doe@example.com',
                        address: '123 Main St, Anytown, USA',
                        phone: '123-456-7890',
                        city: 'Anytown',
                        state: 'CA',
                        zip: '12345',
                        country: 'USA',
                    }),
                    {
                        headers: { 'content-type': 'application/json' },
                        status: 200,
                    },
                ),
        },
        '/*': () => new Response('Not Found', { status: 404 }),
    },
});

console.log(`Server running on ${server.url}`);
