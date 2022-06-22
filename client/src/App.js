import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/users/Login';
import Register from './pages/users/Register';
import AddIncome from './pages/income/AddIncome';
import AddExpense from './pages/expense/AddExpense';
import Profile from './pages/users/Profile';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import Navbar from './components/Navigation/Navbar';
import NotAdmin from './components/NotAdmin';
import AdminRoute from './components/Navigation/AdminRoute';
import DashboardData from './components/DashboardData';
import ExpensesList from './pages/expense/ExpensesList';
import IncomeList from './pages/income/IncomeList';
import EditContent from './components/EditContent';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/dashboard" element={<ProtectedRoute>
        <DashboardData/>
      </ProtectedRoute>}/>
      <Route path="/not-found" element={<NotAdmin/>}/>
      <Route
    path="/add-expense"
        element={
          <ProtectedRoute>
          <AddExpense/>
          </ProtectedRoute>
        }
      />
       <Route path="/expenses" element={
        <ProtectedRoute>
          <ExpensesList/>
        </ProtectedRoute>
      }/>
        <Route path="/edit" element={
        <ProtectedRoute>
          <EditContent/>
        </ProtectedRoute>
      }/>
           <Route
    path="/add-income"
        element={
          <ProtectedRoute>
            <AddIncome/>
          </ProtectedRoute>
        }
      />
       <Route path="/incomes" element={
        <ProtectedRoute>
          <IncomeList/>
        </ProtectedRoute>
      }/>
      
        <Route
    path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    </Router>
  );
}

export default App;
