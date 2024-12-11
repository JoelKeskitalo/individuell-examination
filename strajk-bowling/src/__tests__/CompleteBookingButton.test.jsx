import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import Booking from "../views/Booking"

test("renders a complete booking button and navigates on click", async () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    );

    const completeBookingButton = screen.getByRole("button", { name: /slutför bokning/i })
    expect(completeBookingButton).toBeInTheDocument();

    fireEvent.click(completeBookingButton)

})
