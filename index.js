const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const { requireAuthen } = require("./Authmiddleware/authMiddleware");
dotenv.config();

const cors = require("cors");
const URI = process.env.URL;

const run = async () => {
  await mongoose.connect(URI);
  console.log("Connected to myDB");
};

run().catch((err) => console.error(err));
// mongoose.connect("mongodb+srv://mishrarishi2911:Rishi2811@cluster0.3ndhk2d.mongodb.net/").then(console.log("Connected to MongoDB"))
// .catch((err)=>console.log(err))
// const db=mongoose.connection

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
//  error check
app.use((req, res, next) => {
  console.log("\nNew Request Made :");
  console.log("Host : ", req.hostname);
  console.log("Path : ", req.path);
  console.log("Method : ", req.method);
  next();
});

app.use("/", require("./Routes/authRoutes"));
app.use("/", require("./Routes/routes"));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.listen(process.env.port || 4000, function () {
  console.log("listening to requests");
});
