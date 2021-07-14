import { useState } from "react";

import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 1,
    title: "Activa EMI",
    amount: 5000,
    date: new Date(2020, 2, 20),
  },
  {
    id: 2,
    title: "Chair",
    amount: 6700,
    date: new Date(2020, 9, 10),
  },
  {
    id: 3,
    title: "Monthly groceries",
    amount: 400,
    date: new Date(2021, 5, 26),
  },
  {
    id: 4,
    title: "Home rent",
    amount: 7500,
    date: new Date(2021, 6, 1),
  },
  {
    id: 5,
    title: "Laptop EMI",
    amount: 10000,
    date: new Date(2021, 8, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = (expense) => {
    const newExpense = {
      id: expenses.length + 1,
      ...expense,
    };

    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenseArray={expenses} />
    </div>
  );
}

export default App;
