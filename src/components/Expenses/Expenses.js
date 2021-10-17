import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [enteredFilterYear, setEnteredFilterYear] = useState("2020");

  const saveFilterDataHandler = (filterYear) => {
    console.log(filterYear);
    setEnteredFilterYear(filterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={enteredFilterYear}
        onSaveFilterData={saveFilterDataHandler}
      />
      {props.expenses
        .filter(
          (expense) =>
            expense.date.getFullYear().toString() === enteredFilterYear
        )
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
