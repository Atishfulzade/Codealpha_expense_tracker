const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const peopleRoute = require("./router/routes");
const app = express();
const port = process.env.PORT || 3000;
const connect = require("./database/conn");
const personSchema = require("./model/personSchema");
// Connect to MongoDB

connect();

// const Person = mongoose.model("Person", personSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", peopleRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
