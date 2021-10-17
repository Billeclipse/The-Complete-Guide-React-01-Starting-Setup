import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [enteredFilterYear, setEnteredFilterYear] = useState("2020");

  const saveFilterDataHandler = (filterYear) => {
    console.log(filterYear);
    setEnteredFilterYear(filterYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === enteredFilterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={enteredFilterYear}
        onSaveFilterData={saveFilterDataHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
