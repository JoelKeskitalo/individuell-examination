import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

test("displays an error message when booking is unavailable", () => {
    render(
        <ErrorMessage message="Booking unavailable for the selected time" />
    )

    const errorMessage = screen.getByText(/booking unavailable for the selected time/i)
    expect(errorMessage).toBeInTheDocument()
})