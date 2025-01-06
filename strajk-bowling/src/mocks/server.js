import { setupServer } from 'msw/node';
import { handlers } from './handlers';


// Fixar fetch-problemet i Node.js
if (typeof global.fetch === 'undefined') {
    const { fetch, Response, Headers, Request } = require('undici');
    global.fetch = fetch;
    global.Response = Response;
    global.Headers = Headers;
    global.Request = Request;
}

export const server = setupServer(...handlers);
