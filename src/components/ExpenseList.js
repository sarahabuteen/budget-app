import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <>
      <h4>Expenses History</h4>
      <ul className="list-unstyled">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
