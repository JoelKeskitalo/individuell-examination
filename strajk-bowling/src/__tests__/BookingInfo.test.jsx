import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { vi } from "vitest" // Importera Vitests mock-funktion
import BookingInfo from "../components/BookingInfo/BookingInfo"

test("renders all input fields for booking info", () => {
  render(<BookingInfo updateBookingDetails={() => {}} />)

  // Kontrollera att alla inputfält renderas
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/number of awesome bowlers/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/number of lanes/i)).toBeInTheDocument()
})


test("calls updateBookingDetails on input change", () => {
  const mockUpdate = vi.fn() // Ändra till vi.fn()
  render(<BookingInfo updateBookingDetails={mockUpdate} />)

  // Datumfält
  const dateField = screen.getByLabelText(/date/i);
  fireEvent.change(dateField, { target: { value: "2023-12-31" } })
  expect(mockUpdate).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ value: "2023-12-31", name: "when" }),
    })
  )

  // Tidfält
  const timeField = screen.getByLabelText(/time/i)
  fireEvent.change(timeField, { target: { value: "18:00" } })
  expect(mockUpdate).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ value: "18:00", name: "time" }),
    })
  )

  // Antal bowlare
  const peopleField = screen.getByLabelText(/number of awesome bowlers/i)
  fireEvent.change(peopleField, { target: { value: "4" } })
  expect(mockUpdate).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ value: "4", name: "people" }),
    })
  )

  // Antal banor
  const lanesField = screen.getByLabelText(/number of lanes/i)
  fireEvent.change(lanesField, { target: { value: "2" } })
  expect(mockUpdate).toHaveBeenCalledWith(
    expect.objectContaining({
      target: expect.objectContaining({ value: "2", name: "lanes" }),
    })
  )
})


test("has correct default values for inputs", () => {
    render(<BookingInfo updateBookingDetails={() => {}} />)
    
    // Kontrollera standardvärden
    expect(screen.getByLabelText(/date/i)).toHaveValue("") // Ingen standard
    expect(screen.getByLabelText(/time/i)).toHaveValue("") // Ingen standard
    expect(screen.getByLabelText(/number of awesome bowlers/i)).toHaveValue(null) // Ingen standard
    expect(screen.getByLabelText(/number of lanes/i)).toHaveValue(null) // Ingen standard
})
  

test("updateBookingDetails receives correct structure for all inputs", () => {
    const mockUpdate = vi.fn();
    render(<BookingInfo updateBookingDetails={mockUpdate} />)
  
    // Simulera ändring i alla fält
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2023-12-31" } })
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "18:00" } })
    fireEvent.change(screen.getByLabelText(/number of awesome bowlers/i), { target: { value: "4" } })
    fireEvent.change(screen.getByLabelText(/number of lanes/i), { target: { value: "2" } })
  
    // Kontrollera alla anrop till mockUpdate
    expect(mockUpdate).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ target: expect.objectContaining({ value: "2023-12-31", name: "when" }) })
    )
    expect(mockUpdate).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ target: expect.objectContaining({ value: "18:00", name: "time" }) })
    )
    expect(mockUpdate).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({ target: expect.objectContaining({ value: "4", name: "people" }) })
    )
    expect(mockUpdate).toHaveBeenNthCalledWith(
      4,
      expect.objectContaining({ target: expect.objectContaining({ value: "2", name: "lanes" }) })
    )
})
  
