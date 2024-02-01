import express from "express";

import {
  getAllExpenses,
  addExpense,
} from "../controllers/expense.controller.mjs";

const expenseRouter = express.Router();

expenseRouter.get("/expenses", async (req, res) => {
  try {
    const expenses = await getAllExpenses();

    if (!expenses) {
      res.status(404).json({ error: "Failed to fetch all expenses" });
    }

    res
      .status(200)
      .json({ message: "Expenses fetched successfully", expenses: expenses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

expenseRouter.post("/expenses", async (req, res) => {
  try {
    const expenseData = req.body;
    const addedExpense = await addExpense(expenseData);

    if (!addedExpense) {
      res.status(404).json({ error: "Unable to add expense" });
    }

    res
      .status(201)
      .json({
        message: "Expense added successfully",
        addedExpense: addedExpense,
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { expenseRouter };
