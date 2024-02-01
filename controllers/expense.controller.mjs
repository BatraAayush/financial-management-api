import { Expense } from "../models/expense.model.mjs";

const getAllExpenses = async () => {
  try {
    const expenses = await Expense.find();

    return expenses;
  } catch (error) {
    throw error;
  }
};

const addExpense = async (expenseData) => {
  try {
    const expense = new Expense(expenseData);
    const addedExpense = await expense.save();

    return addedExpense;
  } catch (error) {
    throw error;
  }
};

export { getAllExpenses, addExpense };
