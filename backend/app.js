import express from 'express'
import dotENV from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from './app/configs/connectDB.js';
import router from './routes/postApi.js';

const app = express();
dotENV.config();
app.use(cors());
app.use(express.static('public/update'))
app.use(express.json());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection of Mongoose
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);

// Router
app.use('/api', router)


// Servcer Start
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server Start on ${PORT}`);
})