import { handlers } from './mocks/handlers';

global.fetch = async (url, options = {}) => {
  const method = options.method || 'GET';

  // Hitta en matchande handler
  const handler = handlers.find(
    (h) => h.method === method && url.includes(h.url)
  );

  if (!handler) {
    console.warn('Unhandled request:', method, url);
    throw new Error(`Unhandled request: ${method} ${url}`);
  }

  // Returnera mock-svaret
  return {
    ok: true,
    status: 200,
    json: async () => handler.response,
  };
};
