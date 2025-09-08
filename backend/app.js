const express = require('express');
const app = express();
const { configDotenv } = require("dotenv");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const connectToDb = require('./DB/db');
const userRoutes = require('./routes/user');


connectToDb();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.send("hello");
});
app.use('/user', userRoutes);


module.exports = app;