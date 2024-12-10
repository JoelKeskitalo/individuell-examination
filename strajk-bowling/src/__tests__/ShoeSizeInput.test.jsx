import { render, screen, fireEvent, within } from "@testing-library/react"
import "@testing-library/jest-dom"
import Input from "../components/Input/Input"
import Shoes from "../components/Shoes/Shoes"


test("renders an input field with the correct label", () => {
  render(
    <Input
      label="Shoe size / person 1"
      type="text"
      name="1"
      handleChange={() => {}}
    />
  )

  const input = screen.getByLabelText(/Shoe size \/ person 1/i)
  expect(input).toBeInTheDocument()
})


test("allows user to input a shoe size", () => {
  const mockHandleChange = vi.fn() // Skapa en mock-funktion för att spåra anrop
  render(
    <Input
      label="Shoe size / person 1"
      type="text"
      name="1"
      handleChange={mockHandleChange}
    />
  );

  const input = screen.getByLabelText(/Shoe size \/ person 1/i)

  fireEvent.change(input, { target: { value: "42" } })

  expect(mockHandleChange).toHaveBeenCalled()
  

  const event = mockHandleChange.mock.calls[0][0]
  expect(event.target.name).toBe("1")
  expect(event.target.value).toBe("42")
})


test("renders the correct number of input fields for shoe sizes", () => {
  const mockShoes = [
    { id: "1", size: "" },
    { id: "2", size: "" },
    { id: "3", size: "" },
  ]

  render(
    <Shoes
      updateSize={() => {}}
      addShoe={() => {}}
      removeShoe={() => {}}
      shoes={mockShoes}
    />
  )

  const inputs = screen.getAllByLabelText(/Shoe size \/ person/i)
  expect(inputs).toHaveLength(mockShoes.length)
})


test("allows user to input shoe sizes for multiple players", () => {
  const mockUpdateSize = vi.fn(); // Skapa en mock-funktion för att spåra anrop
  const mockShoes = [
    { id: "1", size: "" },
    { id: "2", size: "" },
  ]

  render(
    <Shoes
      updateSize={mockUpdateSize}
      addShoe={() => {}}
      removeShoe={() => {}}
      shoes={mockShoes}
    />
  )


  const inputs = screen.getAllByLabelText(/Shoe size \/ person/i)


  fireEvent.change(inputs[0], { target: { value: "42" } })
  fireEvent.change(inputs[1], { target: { value: "38" } })


  expect(mockUpdateSize).toHaveBeenCalledTimes(2)


  const firstCallEvent = mockUpdateSize.mock.calls[0][0]
  expect(firstCallEvent.target.name).toBe("1")
  expect(firstCallEvent.target.value).toBe("42")

  const secondCallEvent = mockUpdateSize.mock.calls[1][0]
  expect(secondCallEvent.target.name).toBe("2")
  expect(secondCallEvent.target.value).toBe("38")
})



test("displays a summary of shoe sizes for all players", () => {
  const mockShoes = [
    { id: "1", size: "42" },
    { id: "2", size: "38" },
    { id: "3", size: "45" },
  ]

  render(
    <Shoes
      updateSize={() => {}}
      addShoe={() => {}}
      removeShoe={() => {}}
      shoes={mockShoes}
    />
  )

  const summarySection = screen.getByRole("region", { name: /shoe sizes summary/i });
  const summaryList = within(summarySection).getByRole("list");
  const items = within(summaryList).getAllByRole("listitem");


  expect(items).toHaveLength(mockShoes.length)
  mockShoes.forEach((shoe, index) => {
    expect(within(items[index]).getByText(new RegExp(`Person ${index + 1}`, "i"))).toBeInTheDocument();
    expect(within(items[index]).getByText(new RegExp(shoe.size, "i"))).toBeInTheDocument();
  })
})

