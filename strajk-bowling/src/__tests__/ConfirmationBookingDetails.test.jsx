import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import Confirmation from '../views/Confirmation'

test("display the booking number after booking is completed", () => {
    const mockConfirmation = {
        when: "2024-12-31T18:00",
        people: 4,
        lanes: 2,
        id: "BOOK12345",
        price: 680
    }

    render(
        <MemoryRouter initialEntries={ [{ state: {confirmationDetails: mockConfirmation} }]}>
            <Confirmation />
        </MemoryRouter>
    )

    const bookingNumberInput = screen.getByDisplayValue(mockConfirmation.id)
    expect(bookingNumberInput).toBeInTheDocument()
})


test("displays the total price breakdown after booking is completed", () => {
    const mockConfirmation = {
      when: "2024-12-31T18:00",
      people: 4,
      lanes: 2,
      id: "BOOK12345",
      price: 680, // 4 x 120 + 2 x 100
    };
  
    render(
      <MemoryRouter initialEntries={[{ state: { confirmationDetails: mockConfirmation } }]}>
        <Confirmation />
      </MemoryRouter>
    );
  
    // Kontrollera totalsumman
    const totalPriceElement = screen.getByText(/total:/i)
    expect(totalPriceElement).toBeInTheDocument()
    expect(totalPriceElement.nextSibling.textContent).toContain(`${mockConfirmation.price} sek`)
  
    // Kontrollera uppdelningen mellan spelare och banor
    const peopleBreakdown = screen.getByText((content) => content.includes("4 x 120"));
    expect(peopleBreakdown).toBeInTheDocument()
  
    const lanesBreakdown = screen.getByText((content) => content.includes("2 x 100"));
    expect(lanesBreakdown).toBeInTheDocument()
  })