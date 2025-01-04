import { setupServer } from 'msw/node'; // Korrekt import
import { http } from 'msw'; // Korrekt import för MSW 2.0
import { Response } from 'node-fetch'; // Lägg till denna import för att definiera Response

export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', async ({ request }) => {
    const { name, shoeSize } = await request.json(); // Fetch API:s request.json()

    // Simulera ett lyckat svar med confirmationId
    return new Response(
      JSON.stringify({ confirmationId: 'MOCK12345' }), // Returnera mockad data som JSON
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }),
];

export const server = setupServer(...handlers); // Använd setupServer med handlers
