// Mock Service Worker - mocka fetch med MSW
import { rest } from 'msw';

export const handlers = [
  rest.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', async (req, res, ctx) => {
    const { name, shoeSize } = await req.json();

    // Simulera ett lyckat svar med confirmationId
    return res(
      ctx.status(200),
      ctx.json({ confirmationId: 'MOCK12345' })
    );
  }),
];
