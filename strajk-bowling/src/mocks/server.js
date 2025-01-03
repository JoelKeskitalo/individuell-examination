import { setupServer } from 'msw/node';  // Importera korrekt från msw/node
import { http } from 'msw';  // Importera http från MSW 2.0

// Definiera mockade API-händelser här
export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', async ({ request }) => {
    const { name, shoeSize } = await request.json();  // Använd fetch API:s request.json() direkt

    // Simulera ett lyckat svar med confirmationId
    return new Response(
      JSON.stringify({ confirmationId: 'MOCK12345' }),  // Returnera mockad data som JSON
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }),
];

// Skapa servern med handlerna
export const server = setupServer(...handlers);  // Korrekt användning av setupServer
