import { sendBooking } from '../utils/sendBooking';  // Väg till din funktion
import { server } from '../mocks/server';  // MSW mock server
import { expect, vi } from 'vitest';

describe('Sendbooking API Mock', () => {
  it('should send a booking successfully', async () => {
    // Skicka mockad bokning
    const bookingData = { /* Bokningsdata här */ };
    const response = await sendBooking(bookingData);

    // Förvänta oss att vi får en korrekt confirmationId
    expect(response.confirmationId).toBe('MOCK12345');  // Kontrollera att vi får confirmationId
  });
});
