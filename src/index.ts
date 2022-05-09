import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { fibonnaciRouter } from "./routes/fibonacci.router";


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors());

app.use('/fibonnaci', fibonnaciRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});