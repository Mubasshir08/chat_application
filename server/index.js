require('dotenv').config()

const express = require('express');
const app = express();

const register = require('./routes/userRoute')
const dbConfig = require('./config/database')();
const PORT = process.env.PORT;

app.use(express.json());

// routes
app.use('/user', register)

app.listen(PORT, () => console.log("Hey There Port is " + PORT))
