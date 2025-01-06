import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BookingInfo from "../components/BookingInfo/BookingInfo";

test("completes a booking successfully and navigates to confirmation page", async () => {
  const mockUpdate = vi.fn();

  render(
    <MemoryRouter>
      <BookingInfo updateBookingDetails={mockUpdate} />
    </MemoryRouter>
  );

  // Simulera att användaren fyller i alla fält
  fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2023-12-31" } });
  fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of awesome bowlers/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/number of lanes/i), { target: { value: "2" } });

  // Simulera att användaren skickar formuläret
  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  expect(mockUpdate).toHaveBeenCalledTimes(4); 
  expect(mockUpdate).toHaveBeenNthCalledWith(
    1,
    expect.objectContaining({ target: expect.objectContaining({ value: "2023-12-31", name: "when" }) })
  );
});
