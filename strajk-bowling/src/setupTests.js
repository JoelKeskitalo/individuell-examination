import { server } from './mocks/server'; 

// Starta servern innan tester
beforeAll(() => server.listen());

// Återställ MSW handlers efter varje test
afterEach(() => server.resetHandlers());

// Stäng ner servern efter alla tester
afterAll(() => server.close());
