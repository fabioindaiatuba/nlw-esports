import express from "express";

const app = express();

app.get("/games", (request, response) => {
  response.json({});
});

app.get("/games/:id/ads", (request, response) => {
  const { id } = request.params;
  return response.json({ id });
});

app.post("/ads", (request, response) => {
  response.status(201).json({});
});

app.get("/ads/:id/discord", (request, response) => {
  return response.json([]);
});

app.listen(3333);
