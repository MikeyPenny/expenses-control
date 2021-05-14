import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = props => {
	let items = null;

	if (props.expenses.length > 0) {
		items = props.expenses.map(expense => {
			return (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			);
		});
	}

	return <div className='expenses'>{items}</div>;
};

export default ExpenseList;
