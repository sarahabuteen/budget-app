import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="bg-danger d-flex align-items-center justify-content-between p-2 shadow-sm rounded mb-2">
      <span className="text-white">{expenseTransaction.expenseText}</span>
      <span className="text-white">{expenseTransaction.expenseDate}</span>
      <div>
        <span className="text-white">${expenseTransaction.expenseAmount}</span>
        <button
          onClick={() => deleteTransaction(expenseTransaction.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash text-white ms-3"></i>
        </button>
      </div>
    </li>
  );
};

export default ExpenseTransaction;
