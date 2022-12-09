//보라박스 전체요소를 받아서 반환
//반환 새Title,Amount,Date

import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    };
    const stopEditingHandler = () => {
        setIsEditing(false)
    }





    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} onCansel={stopEditingHandler} />}
        </div>
    );
};

export default NewExpense;