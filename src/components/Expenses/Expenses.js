import { useState } from "react";

import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /*const filteredExpenses = props.expenseArray.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );*/

  var monthNames = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  const filteredExpenses = props.expenseArray.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // sort the data array
  filteredExpenses.sort(function (a, b) {
    // sort based on the value in the monthNames object
    return (
      monthNames[a.date.toLocaleDateString("en-US", { month: "long" })] -
      monthNames[b.date.toLocaleDateString("en-US", { month: "long" })]
    );
  });

  /*let expensesContent = <p>No Expenses found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }*/

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          filteredYear={filteredYear}
        />

        {/* {expensesContent} */}

        <ExpensesChart expenses={filteredExpenses} />

        <ExpenseList expenses={filteredExpenses} />

        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* {props.expenseArray.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      </Card>
    </div>
  );
};

export default Expenses;
