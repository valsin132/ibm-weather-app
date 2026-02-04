import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb, PORT } from './db.js';
import searchRoutes from './routes/searchRoutes.js';
import weatherRoutes from './routes/weatherRoutes.js';

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(express.json());
app.use(cors());

app.use('/api/search', searchRoutes);
app.use('/api/weather', weatherRoutes);

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err);
  });
