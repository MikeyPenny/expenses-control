import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
	const [filter, setFilter] = useState('2020');

	const onChangeFilterHandler = filterData => {
		setFilter(filterData);
	};

	const filteredItems = props.expenses.filter(
		expense => expense.date.getFullYear().toString() === filter
	);

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filter}
					onChangeSelection={onChangeFilterHandler}
				/>
				<ExpensesChart expenses={filteredItems} />
				<ExpensesList expenses={filteredItems} />
			</Card>
		</div>
	);
};

export default Expenses;
