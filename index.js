const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8000;
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_DB_URL)
        .then(() => console.log("Mongo DB Connection is Successful"))
        .catch((err) => {
            console.log(err);
    });

// All API route goes here
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/', require('./routes'));



app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

