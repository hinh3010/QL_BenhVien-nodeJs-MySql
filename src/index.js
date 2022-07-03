import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import viewEngine from './config/viewEngineConfig.js'
import connectDB from './config/dbConfig.js';
import initRoutes from './routes/index.js';

// config
dotenv.config()
const app = express();
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors({ origin: process.env.ORIGIN_CONNECTED, credentials: true }));
viewEngine(app)

// routes
initRoutes(app)

// connect db
connectDB()

app.get('/', (req, res) => {
    res.json({ adu: 'adu' })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))