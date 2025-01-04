import { sendBooking } from '../utils/sendBooking';

test('sends a booking successfully', async () => {
  const response = await sendBooking({
    name: 'Test User',
    email: 'test@example.com',
  });

  expect(response).toHaveProperty('confirmationId', 'MOCK12345');
});
