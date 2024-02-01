import mongoose from "mongoose";
import { Saving } from "../models/saving.model.mjs";

const getAllSavings = async () => {
  try {
    const savings = await Saving.find();

    return savings;
  } catch (error) {
    throw error;
  }
};

const addSaving = async (savingData) => {
  try {
    const saving = new Saving(savingData);
    const addedSaving = await saving.save();

    return addedSaving;
  } catch (error) {
    throw error;
  }
};

export { getAllSavings, addSaving };
