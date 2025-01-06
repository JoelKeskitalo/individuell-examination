import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Starta MSW med handlers från mocks/handlers
export const worker = setupWorker(...handlers);
