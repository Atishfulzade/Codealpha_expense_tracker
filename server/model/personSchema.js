const mongoose = require("mongoose");

// Expense schema
// const expenseSchema = new mongoose.Schema({
//   name: String,
//   title: String,
//   source: String,
//   description: String,
//   amount: Number,
// });

// // Income schema
// const incomeSchema = new mongoose.Schema({
//   name: String,
//   title: String,
//   source: String,
//   description: String,
//   amount: Number,
// });

// Person schema
const personSchema = new mongoose.Schema({
  name: String,
  balance: { type: Number, default: 0 },
  expenses: [
    {
      title: String,
      category: String,
      source: String,
      note: String,
      amount: Number,
    },
  ],
  incomes: [
    {
      title: String,
      category: String,
      source: String,
      note: String,
      amount: Number,
    },
  ],
});

// Exporting schemas

module.exports =
  mongoose.model.Peoples || mongoose.model("Person", personSchema);
