import "./ExpenseForm.css";

import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState)=>{
      return {...prevState, enteredTitle: event.target.value};
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  */

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle === "") {
      alert("You must enter a title!");
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };

      // console.log(expenseData);
      props.onSaveExpenseData(expenseData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      props.formHandler();
    }
  };

  const cancelHandler = () => {
    props.formHandler();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onInput={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={enteredAmount}
            min="1"
            step="1"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label for="dare">Date</label>
          <input
            id="date"
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button
          className="expense-form-button"
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button className="expense-form-button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
