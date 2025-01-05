// server.js
import { setupServer } from 'msw/node'; // Importerar serverinställningarna
import { http } from 'msw';  // Vi använder http här istället för rest



// Skapa servern som mockar POST-anrop på den specifika URL:n
export const server = setupServer(
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', (req, res, ctx) => {
    // Skapa ett mockat svar
    const responseBody = { confirmationId: "MOCK12345" };
    const status = 200; // Anger att anropet är lyckat
    return res(
      ctx.status(status),
      ctx.json(responseBody)  // Returnerar mockad data
    );
  })
);
