import React from "react";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="app-container">
        <Balance />
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-12">
              <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <IncomeList />
            </div>
            <div className="col-md-6">
              <ExpenseList />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <hr/>
            </div>
          </div>
        </div>
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
