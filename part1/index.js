import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/games';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/games', contactsRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});