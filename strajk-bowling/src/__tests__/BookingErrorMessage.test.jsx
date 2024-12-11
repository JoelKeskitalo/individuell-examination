import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import Booking from '../views/Booking'

test("displays error message when booking cannot be completed", async () => {
    render(
        <MemoryRouter>
            <Booking />
        </MemoryRouter>
    )

    const completeBookingButton = screen.getByRole("button", { name: /slutför bokning/i })

    fireEvent.click(completeBookingButton)

    const errorMessage = await screen.findByText(/alla fälten måste vara ifyllda/i)
    expect(errorMessage).toBeInTheDocument()
})