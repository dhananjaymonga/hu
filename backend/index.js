const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./model/user");
const jwt = require('jsonwebtoken')
const app = express();
const port = 5000;
const random = "1lk3kelo3kjo3i8409403jKKWJDIC#@)$*@(r93"
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials : true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  const query = req.query;
  console.log(query.app);
  res.status(200).send("all good");
});

app.post("/logindata", async (req, res) => {
  const data = req.body;
  try {
    const user =  await users.create(data);
    const token =  jwt.sign({_id : user._id} , random )
    res.cookie('myID' , token , {
      httpOnly : true ,
      maxAge : 15 * 60 * 1000
    })
    res.status(200).json({ msg: "Data Save" , success : true });
  } catch (error) {
    res.status(500).json({ msg: "sever error" , success : false });
    console.log(error)
  }
});
mongoose
  .connect("mongodb://localhost:27017/dhananjay")
  .then(() => {
    app.listen(port, () => {
      console.log("sever start port is " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
