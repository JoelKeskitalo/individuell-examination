import { sendBooking } from '../utils/sendBooking';

test('sends a booking successfully', async () => {
  const bookingData = { name: "Test User", shoeSize: 42 };

  // Anropa sendBooking och få responsen
  const response = await sendBooking(bookingData);
  console.log("Mottagen respons:", response);  // Logga den mottagna responsen

  // Kontrollera om confirmationId finns i responsen och om det matchar förväntad värde
  expect(response.confirmationId).toBe("MOCK12345");
});
