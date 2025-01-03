import('node-fetch').then((fetchModule) => {
    global.fetch = fetchModule.default;
    global.Response = fetchModule.Response;
    global.Request = fetchModule.Request;
    global.Headers = fetchModule.Headers;
  });
  


import { server } from './mocks/server';  // Importera mock-servern

beforeAll(() => server.listen());  // Starta servern innan tester
afterEach(() => server.resetHandlers());  // Återställ handlers efter varje test
afterAll(() => server.close());  // Stäng servern när testerna är klara
