import express from "express";

import { getAllSavings, addSaving } from "../controllers/saving.controller.mjs";

const savingRouter = express.Router();

savingRouter.get("/savings", async (req, res) => {
  try {
    const savings = await getAllSavings();

    if (!savings) {
      res.status(404).json({ error: "Failed to fetch all savings" });
    }

    res
      .status(200)
      .json({ message: "Savings fetched successfully", savings: savings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

savingRouter.post("/savings", async (req, res) => {
  try {
    const savingData = req.body;
    const addedSaving = await addSaving(savingData);

    if (!addedSaving) {
      res.status(404).json({ error: "Unable to add saving" });
    }

    res
      .status(201)
      .json({ message: "Saving added successfully", addedSaving: addedSaving });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { savingRouter };
