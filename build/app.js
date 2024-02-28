import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './route/auth.js';
import { db } from './data/index.js';
const app = express();
app.use(express.json());
app.use('/api/auth', router);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    db.initDb();
});
//# sourceMappingURL=app.js.map