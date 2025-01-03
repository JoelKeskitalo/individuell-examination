import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest"; // Använd vi istället för jest
import BookingInfo from "../components/BookingInfo/BookingInfo";

test("calls handleSubmit when the submit button is clicked", () => {
  const handleSubmit = vi.fn(); // Mocka handleSubmit-funktion med vi.fn()
  render(
    <BookingInfo
      updateBookingDetails={() => {}}
      handleSubmit={handleSubmit}
    />
  );

  // Hitta och klicka på submit-knappen
  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  // Kontrollera att handleSubmit kallades
  expect(handleSubmit).toHaveBeenCalled();
});
