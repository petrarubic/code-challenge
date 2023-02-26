const request = require("supertest");
const baseURL = "http://localhost:3000";

describe("Encode given string", () => {
  const input = { text: "XXXXYYYZZ" };
  beforeAll(async () => {
    await request(baseURL).post("/encode").send(input);
  });
  it("should return encoded string", async () => {
    const response = await request(baseURL)
      .post("/encode")
      .send(encoder(input));
    expect(response.statusCode).toBe(201);
    expect(response.body).toBe("X4Y3Z2");
  });
});
