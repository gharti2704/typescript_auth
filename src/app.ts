import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, Express } from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World');
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on htt://localhost:${port}`);
});
