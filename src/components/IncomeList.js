import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <>
      <h4>Income History</h4>
      <ul className="list-unstyled">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default IncomeList;
