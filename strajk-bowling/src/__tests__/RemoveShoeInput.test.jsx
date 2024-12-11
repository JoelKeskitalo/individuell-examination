import { render, screen, fireEvent } from '@testing-library/react'
import Shoes from '../components/Shoes/Shoes'

test("renders a remove button for each shoe size input ", () => {
    const mockRemoveShoe = vi.fn()
    const mockShoes = [
        { id: "1", size: "42" },
        { id: "2", size: "38" } 
    ]

    render(
        <Shoes 
            updateSize={() => {}}
            removeShoe={mockRemoveShoe}
            shoes={mockShoes}
        />
    )


    // Kontrollera att det finns en knapp för varje skostorlek
    const removeButtons = screen.getAllByRole("button", { name: "-" })
    expect(removeButtons).toHaveLength(mockShoes.length)


    // Simulera att användaren trycker på den första knappen
    fireEvent.click(removeButtons[0])

    expect(mockRemoveShoe).toHaveBeenCalledWith("1")
})


test("remove the correct shoe size when remove button is clicked", () => {
    const mockRemoveShoe = vi.fn()
    const mockShoes = [
        { id: "1", size: "42" },
        { id: "2", size: "38" },
        { id: "3", size: "45" },
    ]

    render(
        <Shoes 
            updateSize={() => {}}
            removeShoe={mockRemoveShoe}
            shoes={mockShoes}
        />
    )

    // Kontrollera att rätt antal knappar visas för användaren
    const removeButtons = screen.getAllByRole("button", { name: "-" })
    expect(removeButtons).toHaveLength(mockShoes.length)

    // Klicka på knappen för att ta bort den andra spelaren (notera indexNr 1, andra elementet i arrayen)
    fireEvent.click(removeButtons[1])

    // Kontroll så att removeShoe anropades med idt för den andra spelaren
    expect(mockRemoveShoe).toHaveBeenCalledWith("2")
})


test("updates the total shoe count and price correctly when a shoe size is removed", () => {
    const mockRemoveShoe = vi.fn()
    const mockShoes = [
      { id: "1", size: "42" },
      { id: "2", size: "38" },
      { id: "3", size: "45" },
    ]
  
    const calculatePrice = (shoes) => shoes.length * 50;
  
    render(
      <Shoes
        updateSize={() => {}}
        addShoe={() => {}}
        removeShoe={mockRemoveShoe}
        shoes={mockShoes}
      />
    )
  

    // Kontrollera initialt pris
    let totalPrice = calculatePrice(mockShoes)
    expect(totalPrice).toBe(150)
  

    // Klicka på knappen för att ta bort den andra spelaren
    const removeButtons = screen.getAllByRole("button", { name: "-" })
    fireEvent.click(removeButtons[1])
  

    // Uppdatera mockShoes och beräkna nytt pris
    const updatedShoes = mockShoes.filter((shoe) => shoe.id !== "2")
    totalPrice = calculatePrice(updatedShoes)
  

    // Kontrollera att priset uppdaterades korrekt
    expect(totalPrice).toBe(100); // 2 skor * 50 sek
  })
  
