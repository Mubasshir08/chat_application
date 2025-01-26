require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const userRoute = require('./routes/userRoute');
const messageRoute = require('./routes/messageRoute');
const dbConfig = require('./config/database')();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"] 
}));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/user', userRoute);
app.use('/message', messageRoute);

app.listen(PORT, () => console.log("Hey There Port is" , PORT))
