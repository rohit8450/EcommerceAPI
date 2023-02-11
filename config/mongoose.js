
    // Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


//Set up default mongoose connection
const mongoDB = process.env.MONGO_DB_URL;
mongoose.set("strictQuery", false);
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));
