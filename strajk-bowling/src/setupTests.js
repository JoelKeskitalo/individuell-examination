global.fetch = require('node-fetch');  // Polyfill för fetch i Node.js
global.Response = require('node-fetch').Response;  // Polyfill för Response
global.Request = require('node-fetch').Request;  // Polyfill för Request
global.Headers = require('node-fetch').Headers;  // Polyfill för Headers

import { server } from './mocks/server';  // Importera mock-servern

beforeAll(() => server.listen());  // Starta servern innan tester
afterEach(() => server.resetHandlers());  // Återställ handlers efter varje test
afterAll(() => server.close());  // Stäng servern när testerna är klara
