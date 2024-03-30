const mongoose = require("mongoose");

const connect = () => {
  const connectdb = mongoose.connect("mongodb://localhost/expense_tracker_db");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};
module.exports = connect;
