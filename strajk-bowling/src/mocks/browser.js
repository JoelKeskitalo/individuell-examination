import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

// Starta MSW med dina handlers
export const worker = setupWorker(...handlers);
