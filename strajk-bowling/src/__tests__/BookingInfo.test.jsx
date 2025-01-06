import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest"; 
import BookingInfo from "../components/BookingInfo/BookingInfo";

test("calls handleSubmit when the submit button is clicked", () => {
  const handleSubmit = vi.fn(); 
  render(
    <BookingInfo
      updateBookingDetails={() => {}}
      handleSubmit={handleSubmit}
    />
  );

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});
