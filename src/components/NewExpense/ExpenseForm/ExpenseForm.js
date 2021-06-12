import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = props => {
	const title = useInputForm('');
	const amount = useInputForm(0.0);
	const date = useInputForm('');

	const onFormSubmitHandler = ev => {
		ev.preventDefault();

		const expenseData = {
			title: title.value,
			amount: parseFloat(amount.value),
			date: new Date(date.value),
		};

		props.onSaveExpData(expenseData);
		props.onToggle();
	};

	return (
		<form onSubmit={onFormSubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' {...title} />
				</div>

				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' {...amount} />
				</div>

				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						{...date}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onToggle}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

const useInputForm = initValue => {
	const [value, SetValue] = useState(initValue);

	function handleChange(e) {
		SetValue(e.target.value);
	}

	return {
		value,
		onChange: handleChange,
	};
};

export default ExpenseForm;
