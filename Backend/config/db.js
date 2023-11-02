
const mongoose = require("mongoose");
require("dotenv").config()

const connection = mongoose.connect(process.env.MONGOSTRING);


module.exports = {
    connection
}