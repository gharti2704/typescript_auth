import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on htt://localhost:${port}`);
});
//# sourceMappingURL=app.js.map