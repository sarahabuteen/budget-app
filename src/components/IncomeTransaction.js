import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="bg-success d-flex align-items-center justify-content-between p-2 shadow-sm rounded mb-2">
      <span className="text-white">{incomeTransaction.incomeText}</span>
      <span className="text-white">{incomeTransaction.incomeDate}</span>
      <div>
        <span className="text-white">${incomeTransaction.incomeAmount}</span>
        <button
          onClick={() => deleteTransaction(incomeTransaction.id)}
          className="delete-btn"
        >
          <i className="fas fa-trash text-white ms-3"></i>
        </button>
      </div>
    </li>
  );
};

export default IncomeTransaction;
