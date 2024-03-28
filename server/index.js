const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost/expense_tracker_db");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Expense schema
const expenseSchema = new mongoose.Schema({
  name: String,
  title: String,
  source: String,
  description: String,
  amount: Number,
});

// Income schema
const incomeSchema = new mongoose.Schema({
  name: String,
  title: String,
  source: String,
  description: String,
  amount: Number,
});

const Expense = mongoose.model("Expense", expenseSchema);
const Income = mongoose.model("Income", incomeSchema);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Expense Routes
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/expenses", async (req, res) => {
  const expense = new Expense({
    description: req.body.description,
    amount: req.body.amount,
  });
  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/expenses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/expenses/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findByIdAndDelete(id);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Income Routes
app.get("/incomes", async (req, res) => {
  try {
    const incomes = await Income.find();
    res.json(incomes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/incomes", async (req, res) => {
  const income = new Income({
    description: req.body.description,
    amount: req.body.amount,
  });
  try {
    const newIncome = await income.save();
    res.status(201).json(newIncome);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/incomes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedIncome = await Income.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedIncome);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/incomes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Income.findByIdAndDelete(id);
    res.json({ message: "Income deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
