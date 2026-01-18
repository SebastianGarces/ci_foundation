import { afterAll, expect, test } from 'bun:test';
import { server } from './index';

afterAll(() => {
    server.stop();
});

test('GET /health', async () => {
    const res = await fetch(server.url + '/health');
    const json = (await res.json()) as { status: string };

    expect(res.status).toBe(200);
    expect(json.status).toBe('OK');
});
