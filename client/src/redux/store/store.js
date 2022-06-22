import {configureStore} from '@reduxjs/toolkit'
import expenseReducer from '../slices/expenses/expensesSlices';
import incomeReducer from '../slices/income/incomeSlices';
import usersReducer from '../slices/users/usersSlices';
import account from "../slices/accountStats/accountStatSlices";
const store = configureStore({
    reducer:{
      users:usersReducer,
      expenses:expenseReducer,
      income:incomeReducer,
      account,
    },
});

export default store;