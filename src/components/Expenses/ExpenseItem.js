// import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(prop) {



    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={prop.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{prop.title}</h2>
                    <div className="expense-item__price">${prop.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem