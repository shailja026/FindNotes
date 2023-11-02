
const express = require("express");
const {connection} = require("./config/db.js")
const {UserRoute} = require("./routes/User.route.js")
const app = express();
require("dotenv").config()

app.use(express.json());

app.get("/" , (req , res) => {
    res.send("Love you jindgi")
})
app.use("/user" , UserRoute)
app.listen(process.env.PORT, async () => {
    try{
        await connection
        console.log("connected to db");
        // console.log(connection);
        console.log(`running on port ${process.env.PORT}`)
    }
    catch(err){
        console.log(err)
    }

})