require('dotenv').config()

const express = require('express');
const app = express();
const dbConfig = require('./config/database')
const PORT = process.env.PORT;
dbConfig();

app.listen(PORT, () => console.log("Hey There Port is " + PORT))
