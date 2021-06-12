import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const NewExpense = props => {
	const [isFormVisible, setisFormVisible] = useState(false);

	const saveExpenseDataHandler = enteredExpense => {
		const expenseData = {
			...enteredExpense,
			id: Math.random().toString(),
		};
		console.log(expenseData);

		props.onAddExpense(expenseData);
	};

	const toggleFormVisible = () => {
		setisFormVisible(prevState => !prevState);
	};

	return (
		<div className='new-expense'>
			{isFormVisible && (
				<ExpenseForm
					onSaveExpData={saveExpenseDataHandler}
					onToggle={toggleFormVisible}
				/>
			)}
			{!isFormVisible && (
				<button onClick={toggleFormVisible}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
