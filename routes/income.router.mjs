import express from "express";

import { getAllIncomes, addIncome } from "../controllers/income.controller.mjs";

const incomeRouter = express.Router();

incomeRouter.get("/incomes", async (req, res) => {
  try {
    const incomes = await getAllIncomes();

    if (!incomes) {
      res.status(404).json({ error: "Failed to fetch all incomes" });
    }

    res
      .status(200)
      .json({ message: "Incomes fetched successfully", incomes: incomes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

incomeRouter.post("/incomes", async (req, res) => {
  try {
    const incomeData = req.body;
    const addedIncome = await addIncome(incomeData);

    if (!addedIncome) {
      res.status(404).json({ error: "Unable to add income" });
    }

    res
      .status(201)
      .json({ message: "Income added successfully", addedIncome: addedIncome });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { incomeRouter };
