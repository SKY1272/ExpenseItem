import "./styles.css";
import ExpenseItem from "./ExpenseItem";
export default function App() {
  const expenses = [];
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {expenses.length > 0 ? (
        <ExpenseItem expenses={expenses} />
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
}
