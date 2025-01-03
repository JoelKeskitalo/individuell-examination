import { sendBooking } from "../utils/sendBooking";

test("sends a booking successfully", async () => {
  const mockBooking = { when: "2023-01-01", lanes: 2, people: 5, shoes: 5 };
  const response = await sendBooking(mockBooking);
  expect(response).toHaveProperty("confirmationId");
  expect(response.confirmationId).toBe("MOCK12345");
});
