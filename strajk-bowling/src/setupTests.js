import { server } from './mocks/server';  // Importera mock-servern

beforeAll(() => server.listen());  // Starta servern innan tester
afterEach(() => server.resetHandlers());  // Återställ handlers efter varje test
afterAll(() => server.close());  // Stäng servern när testerna är klara
