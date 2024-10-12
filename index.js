const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const { requireAuthen } = require("./Authmiddleware/authMiddleware");
dotenv.config();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require("cors");

const URI = process.env.URI;
console.log(URI)

const run = async () => {
  await mongoose.connect(URI);
  console.log("Connected to myDB");
};

run().catch((err) => console.error(err));

app.use(
  cors({
    origin: "http://localhost:3000"||"https://hr-portal-1.onrender.com",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log("\nNew Request Made :");
  console.log("Host : ", req.hostname);
  console.log("Path : ", req.path);
  console.log("Method : ", req.method);
  next();
});

app.use("/", require("./Routes/authRoutes"));
app.use("/", require("./Routes/routes"));



app.listen(process.env.port || 4000, function () {
  console.log("listening to requests");
});
