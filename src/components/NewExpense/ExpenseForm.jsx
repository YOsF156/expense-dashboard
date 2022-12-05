import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {
    const [userInput, setUserInput] = useState({ enteredTitle: "", enteredAmount: "", enteredDate: "" })
    const [formOpen, setFormOpen] = useState(false)

    const updateInputs = (e) => {
        setUserInput((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const clearFormData = () => {
        setUserInput(prev => {
            let newObj = { ...prev }
            for (const key in newObj) {
                newObj[key] = ""
            }
            return newObj
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpense(data)
        handleFormOpen()
    }


    const handleFormOpen = () => {
        setFormOpen(prev => {
            prev && clearFormData();
            return !prev
        })
    }

    if (!formOpen) {
        return (
            <div className="new-expense__to-edit-mode">
                <button onClick={handleFormOpen}>Add expense</button>
            </div>)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={userInput.enteredTitle} onChange={updateInputs} name="enteredTitle" type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={userInput.enteredAmount} onChange={updateInputs} name="enteredAmount" type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={userInput.enteredDate} onChange={updateInputs} name="enteredDate" type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={handleFormOpen}>Cancel</button>
                <button type="submit"  >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm