import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
    incomeDate: ""
  });

  const { incomeText, incomeAmount, incomeDate } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
        incomeDate
      };

      addIncome(newIncomeTransaction);

      setIncome({
        incomeText: "",
        incomeAmount: 0,
        incomeDate: ""
      });
    }
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
    expenseDate: ""
  });

  const { expenseText, expenseAmount, expenseDate } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
        expenseDate
      };

      addExpense(newExpenseTransaction);

      setExpense({
        expenseText: "",
        expenseAmount: 0,
        expenseDate: ""
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4>Add Income</h4>
          <form onSubmit={onSubmitIncome}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                name="incomeText"
                value={incomeText}
                placeholder="Enter title"
                autoComplete="off"
                onChange={onChangeIncome}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="number"
                name="incomeAmount"
                value={incomeAmount}
                placeholder="Amount"
                autoComplete="off"
                onChange={onChangeIncome}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="date"
                name="incomeDate"
                value={incomeDate}
                placeholder="Date"
                onChange={onChangeIncome}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Add Expense</h4>
          <form onSubmit={onSubmitExpense}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                name="expenseText"
                value={expenseText}
                placeholder="Enter title"
                autoComplete="off"
                onChange={onChangeExpense}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="number"
                name="expenseAmount"
                value={expenseAmount}
                placeholder="Amount"
                autoComplete="off"
                onChange={onChangeExpense}
              />
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="date"
                name="expenseDate"
                value={expenseDate}
                placeholder="Date"
                onChange={onChangeExpense}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
