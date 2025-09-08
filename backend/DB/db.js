const mongoose = require('mongoose');

const MONGODB_URL =  process.env.MONGODB_URL;

function connectToDb() {
    mongoose.connect(process.env.MONGODB_URL,)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(err => {
        console.error("DB connection error:", err);
    });
}

module.exports = connectToDb;
