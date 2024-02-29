import dotenv from 'dotenv';
dotenv.config();
import express, { Express } from 'express';
import router from './route/auth.js';
import { db } from './data/index.js';
import morgan from 'morgan';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(morgan('dev'));
// app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: process.env.DEVELOPMENT_CLIENT_URL,
    })
  );
} else if (process.env.NODE_ENV === 'production') {
  app.use(
    cors({
      origin: process.env.PRODUCTION_CLIENT_URL,
    })
  );
}

app.use('/api/auth', router);

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  console.log(
    `Server is running on http://localhost:${port} - ${process.env.NODE_ENV} mode`
  );
  await db.initDb();
});
