//검정 박스 전체 반환

import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022')
    const filterChangeHandler = (year) => {
        setFilteredYear(year);

    };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    let expensesContent = <p >No expenses found.</p>;
    if (filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
            ))}

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
            {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;