import React, { useState } from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(prop) {
    const [yearFilter, setYearFilter] = useState("2021")

    const updateFilteredYear = year => {
        setYearFilter(year)
    }

    const filteredList = prop.expenses.filter(v => v.date.getFullYear().toString() === yearFilter);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={yearFilter} onSelectFilter={updateFilteredYear} />
            <ExpensesChart expenses={filteredList} />
            <ExpensesList items={filteredList} />
        </Card>

    )
}

export default Expenses