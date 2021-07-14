import "./ExpenseItemDate.css";

const ExpenseItemDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  // const month = props.date.getMonth();
  const year = props.date.getFullYear();
  const date = props.date.getDate();

  return (
    <div className="expense-item-date">
      <div className=".expense-item-date__month">{month}</div>
      <div className=".expense-item-date__year">{year}</div>
      <div className=".expense-item-date__date">{date}</div>
    </div>
  );
};

export default ExpenseItemDate;
