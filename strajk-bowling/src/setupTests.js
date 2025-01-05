import { server } from './mocks/server'
import '@testing-library/jest-dom';

// Fix för `requestSubmit`
if (!HTMLFormElement.prototype.requestSubmit) {
  HTMLFormElement.prototype.requestSubmit = function () {
    if (this instanceof HTMLFormElement) {
      this.submit();
    }
  };
}

// Starta servern före alla tester
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// Återställ mockar efter varje test
afterEach(() => server.resetHandlers());

// Stäng servern efter alla tester
afterAll(() => server.close());
