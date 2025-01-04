import { setupServer } from 'msw/node';
import { http } from 'msw';

export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', async ({ request }, res, ctx) => {
    const { name, shoeSize } = await request.json();

    return res(
      ctx.status(200),
      ctx.json({ confirmationId: 'MOCK12345' })
    );
  }),
];

export const server = setupServer(...handlers);
