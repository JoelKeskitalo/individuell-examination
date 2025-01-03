import { rest } from "msw";

export const handlers = [
  rest.post("https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com", async (req, res, ctx) => {
    const { when, lanes, people, shoes } = await req.json();
    return res(
      ctx.status(200),
      ctx.json({
        confirmationId: "MOCK12345",
        when,
        lanes,
        people,
        shoes,
        totalPrice: people * 120 + lanes * 100,
      })
    );
  }),
  rest.get("https://jsonplaceholder.typicode.com/posts/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1, title: "Mock Post" }));
  }),
];
