const { fetch, Response, Request, Headers } = require('undici');

global.fetch = fetch;  // Polyfill för fetch
global.Response = Response;  // Polyfill för Response
global.Request = Request;  // Polyfill för Request
global.Headers = Headers;  // Polyfill för Headers

import { server } from './mocks/server';  // Importera mock-servern från din MSW-konfiguration

// Starta servern innan tester
beforeAll(() => server.listen());

// Återställ MSW handlers efter varje test
afterEach(() => server.resetHandlers());

// Stäng ner servern efter alla tester
afterAll(() => server.close());
