import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let MOCK_DATA = [
  {
    id: 'e1',
    title: 'טישו חתוך',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'מסך חדש',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'ביטוח מיותר',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'כסא מנהלים',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'סט כריות',
    amount: 345,
    date: new Date(2022, 7, 13),
  },
  {
    id: 'e6',
    title: 'מחסן כתר',
    amount: 788,
    date: new Date(2022, 11, 8),
  },
];
function App() {
  const [expenses, setExpenses] = useState([...MOCK_DATA])
  const addExpenseHandler = expense => {
    setExpenses(prev => { return [expense, ...prev] })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;


// "eslintConfig": {
//   "extends": [
//     "react-app",
//     "react-app/jest"
//   ]
// },
// "browserslist": {
//   "production": [
//     ">0.2%",
//     "not dead",
//     "not op_mini all"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ]
// }
