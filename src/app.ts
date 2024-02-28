import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import router from './routes/auth.js';

const app: Express = express();

app.use(express.json());

app.use('/api/auth', router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
