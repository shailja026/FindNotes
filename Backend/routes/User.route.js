const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRoute = express.Router();
const { UserModel } = require("../models/User.model");

UserRoute.get("/", (Req, res) => {
  return res.send("user will be present here");
});


// Register routes

UserRoute.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  console.log(name, email, pass);
  try {
    bcrypt.hash(pass, 4, async (err, hash) => {
      if(err){
        console.log(name, email, pass);
       return res.send(err);
      } else {
        const user = new UserModel({ name, email, pass: hash });
        await user.save();
        console.log("========================================created========================================")
      return  res.send("user will be present here");
      }
    });
  } catch (err) {
    console.log("inside error")
    return res.send({ Msg: "Somthing went wrong!", Error: err.message });
  }
});

UserRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, async (err, result) => {
        if (result) {
          const token = jwt.sign({ course: "notesApp" }, "mom");
          return res.send({
            msg: "Login successful",
            token: token,
          });
        } else {
          return res.send(err);
        }
      });
    } else {
      return res.send("Please login first");
    }
  } catch (err) {
    return res.send({ Msg: "Somthing went wrong!", Error: err.message });
  }
});

module.exports = {
  UserRoute,
};
