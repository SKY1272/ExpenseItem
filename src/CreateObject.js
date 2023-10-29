import React, { useState } from "react";

function CreateObject() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the entered data
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    };

    // Log the object on the screen
    setSubmittedData(expenseData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Expense Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label>Expense Amount:</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={enteredDate} onChange={handleDateChange} />
        </div>
        <button type="submit">Add Expense</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Expense Data:</h2>
          <p>Title: {submittedData.title}</p>
          <p>Amount: {submittedData.amount}</p>
          <p>Date: {submittedData.date}</p>
        </div>
      )}
    </div>
  );
}

export default CreateObject;
