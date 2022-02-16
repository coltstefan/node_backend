const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const trainerRoute = require("./routes/trainer");
const programmeRoute = require("./routes/programme");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
    ).then(()=> console.log("DBConnection successfull")).catch((err) => {
        console.log(err);
    })


app.use(express.json());
app.use("/api/auth" , authRoute);
app.use("/api/user" , userRoute);
app.use("/api/trainer" , trainerRoute);
app.use("/api/programmes" , programmeRoute);



app.listen(process.env.PORT || 5000,() => {
    console.log("Backend server is running");
})

