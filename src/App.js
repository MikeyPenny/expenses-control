import {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

	const DUMMY_EXPENSES = [
		{
			id: 'e1',
			title: 'Toilet paper',
			date: new Date(2020, 7, 14),
			amount: 94.12,
		},
		{
			id: 'e2',
			title: 'New TV',
			date: new Date(2021, 2, 12),
			amount: 799.49,
		},
		{
			id: 'e3',
			title: 'Car insurance',
			date: new Date(2021, 2, 28),
			amount: 294.67,
		},
		{
			id: 'e4',
			title: 'New Desk',
			date: new Date(2021, 5, 12),
			amount: 450,
		},
	];

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		const updatedExpenses = [...expenses];
		updatedExpenses.unshift(expense);
		setExpenses(updatedExpenses);
		
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
