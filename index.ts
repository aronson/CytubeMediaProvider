import express from "express";
import * as dotenv from "dotenv";

// Import environment from .env if present
dotenv.config({ path: ".env" });
const { PORT = 4000 } = process.env;
const app = express();

app.get("/", (_request: any, response: { send: (arg0: string) => void }) => {
    response.send("Hello world!");
});

app.listen({ port: PORT });

console.log({
    message: `Server ready at http://localhost:${PORT}/`,
});
