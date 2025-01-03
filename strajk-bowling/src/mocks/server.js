import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);

// Startar servern före tester
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Återställer handlers efter varje test
afterEach(() => server.resetHandlers());

// Stänger servern efter tester
afterAll(() => server.close());
