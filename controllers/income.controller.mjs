import { Income } from "../models/income.model.mjs";

const getAllIncomes = async () => {
  try {
    const incomes = await Income.find();

    return incomes;
  } catch (error) {
    throw error;
  }
};

const addIncome = async (incomeData) => {
  try {
    const income = new Income(incomeData);
    const addedIncome = await income.save();

    return addedIncome;
  } catch (error) {
    throw error;
  }
};

export { getAllIncomes, addIncome };
