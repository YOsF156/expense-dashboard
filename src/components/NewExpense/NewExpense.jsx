import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"
function NewExpense(props) {
    const saveExpenseData = (enteredExpenseData) => {
        const newExpense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseData} />
        </div>
    )
}

export default NewExpense