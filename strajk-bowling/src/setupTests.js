// src/setupTests.js
import '@testing-library/jest-dom';  // Denna import är tillräcklig för att utöka expect med matcher
import { server } from './mocks/server'; // Importera mock servern
import { Response } from 'node-fetch'; // Polyfill för Response
global.Response = Response; // Gör den global


// Setup mock server innan testerna börjar
beforeAll(() => server.listen());

// Återställ mockade svar efter varje test
afterEach(() => server.resetHandlers());

// Stäng ner servern efter alla tester
afterAll(() => server.close());
