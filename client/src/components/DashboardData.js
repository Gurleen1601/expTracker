import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { fetchAccountStatsAction } from "../redux/slices/accountStats/accountStatSlices";
import ErrorDisplayMessage from "./ErrorDisplayMessage";
import GraphData  from "./GraphData";
import LoadingComponent from "./Loading";


const DashboardData = () => {
  const dispatch=useDispatch();
  useEffect(() =>{
    dispatch(fetchAccountStatsAction());
  },[dispatch]);
const account = useSelector(state =>state.account);
const {loading, accountDetails, appErr, serverErr} = account;
console.log(accountDetails?.expenseStats[0]);
  return (
    <section class="py-6">
      <div class="container">
        {/* Grpah */}
       <GraphData income={accountDetails?.incomeStats[0]?.totalIncome}
              expense={accountDetails?.expenseStats[0]?.totalExp}/>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* Grpah */}
         
          {/* <DataGrap income={totalInc} expenses={totalExp} /> */}
        </div>
        {/* Net Profit */}
        <div style={{ textAlign: "center", margin: "20px" }}>
          {/* <h2 className="text-success">Net Profit : {formattedNetProfit}</h2> */}
        </div>
        <div class="row">
          <div class="col-12 col-md-6 mb-6">
            <div class="p-8 border rounded-2">
              <div class="d-flex mb-6 align-items-start justify-content-between">
                <span
                  class="d-inline-flex align-items-center justify-content-center bg-light-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>
                {/* Expenses Start */}
                <span class="badge fs-2 bg-light text-danger">
                  Total Expenses
                </span>
              </div>
              <h1 class="mb-4">{accountDetails?.expenseStats[0]?.totalExp}</h1>
              <p class="mb-0">
                <span>Number of Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.expenseStats[0]?.totalRecordsExp}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Minimum Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.expenseStats[0]?.minExp}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Maximum Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.expenseStats[0]?.maxExp}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Average Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.expenseStats[0]?.averageExp}</span>
                </span>
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-6">
            <div class="p-8 border rounded-2">
              <div class="d-flex mb-6 align-items-start justify-content-between">
                <span
                  class="d-inline-flex align-items-center justify-content-center bg-danger-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                ></span>

                {/* Income Start */}
                <span class="badge fs-2 bg-primary-light text-primary">
                  Total Income
                </span>
              </div>
              <h1 class="mb-4">{accountDetails?.incomeStats[0]?.totalIncome}</h1>

              <p class="mb-0">
                <span>Number of Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.incomeStats[0]?.totalRecordsIncome}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Minimum Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.incomeStats[0]?.minIncome}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Maximum Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.incomeStats[0]?.maxIncome}</span>
                </span>
              </p>

              <p class="mb-0">
                <span>Average Transactions</span>
                <span class="text-danger ms-1">
                  <span>{accountDetails?.incomeStats[0]?.averageIncome}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardData;