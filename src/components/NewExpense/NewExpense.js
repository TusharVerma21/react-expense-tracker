import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    /*const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };*/

    // console.log(expenseData);
    props.onAddExpense(enteredExpenseData);
  };

  const [formIsOpen, setFormIsOpen] = useState(false);

  const formHandler = () => {
    setFormIsOpen(!formIsOpen);
  };

  return (
    <div className="new-expense">
      {formIsOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formHandler={formHandler}
        />
      ) : (
        <button onClick={formHandler}>Add New Expense</button>
      )}
      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;
