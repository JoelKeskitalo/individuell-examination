import { server } from "./mocks/server";
import "@testing-library/jest-dom";
import "whatwg-fetch"; // Polyfill för fetch

beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
