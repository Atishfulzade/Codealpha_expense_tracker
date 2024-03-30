const express = require("express");
const router = express.Router();
const Person = require("../model/personSchema"); // Correct import

router.post("/people", async (req, res) => {
  const { name, balance } = req.body;
  try {
    const newPerson = new Person({
      name,
      balance,
    });
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/people/:name/expense", async (req, res) => {
  const { name } = req.params;
  const { title, category, source, note, amount } = req.body;
  try {
    const person = await Person.findOne({ name: name });
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    person.balance -= amount;

    const newExpense = { ...req.body }; // Assuming req.body has expense details
    person.expenses.push(newExpense);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/people/:name/income", async (req, res) => {
  const { name } = req.params;
  const { title, category, source, note, amount } = req.body;

  try {
    const person = await Person.findOne({ name: name });

    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    person.balance += amount;
    const newIncome = { ...req.body }; // Assuming req.body has income details
    person.incomes.push(newIncome);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route for deleting a transaction
router.delete("/people/:transactionId/expense", async (req, res) => {
  const { transactionId } = req.params;
  try {
    // Find the transaction by ID and delete it
    const person = await findByIdAndDelete(transactionId);
    res.json({ success: true, message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// Route for deleting a transaction
router.delete("/people/:transactionId/income", async (req, res) => {
  const { transactionId } = req.params;
  try {
    // Find the transaction by ID and delete it
    const person = await findByIdAndDelete(transactionId);
    res.json({ success: true, message: "Transaction deleted successfully" });
  } catch (error) {
    console.error("Error deleting transaction:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/people/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const people = await Person.find({ name: name });
    if (people.length === 0) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(people);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
