import React from "react";

function ExpenseItem(props) {
  return (
    <div>
      {props.expenses.length === 1 ? (
        <p>Only single Expense here. Please add more...</p>
      ) : (
        props.expenses.map((expense) => (
          <div key={expense.id}>
            <h2>{expense.title}</h2>
            <p>Amount: ${expense.amount}</p>
            <p>Date: {expense.date.toISOString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseItem;
