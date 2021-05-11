import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const incomeAmounts = incomeTransactions.map(
    (incomeTransaction) => incomeTransaction.incomeAmount
  );

  const expenseAmounts = expenseTransactions.map(
    (expenseTransaction) => expenseTransaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpenses = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="container pt-4">
      <section className="shadow-sm rounded bg-info py-3 mb-3">
        <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-white">Your Balance</h3>
            <h4 className="text-white mb-0">
              ${(totalIncome - totalExpenses).toFixed(2)}
            </h4>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-md-6">
            <div className="bg-success shadow-sm rounded d-flex flex-column align-items-center justify-content-center py-3">
              <h4 className="text-white">Income</h4>
              <h5 className="text-white mb-0">+${totalIncome}</h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-danger shadow-sm rounded d-flex flex-column align-items-center justify-content-center py-3">
              <h4 className="text-white">Expenses</h4>
              <h5 className="text-white mb-0">-${totalExpenses}</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Balance;
