import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {

  const expenses = [
    {id: 'e1', title: 'Toilet paper', date: new Date(2020, 7, 14), amount: 94.12},
    {id: 'e2', title: 'New TV', date: new Date(2021, 2, 12), amount: 799.49},
    {id: 'e3', title: 'Car insurance', date: new Date(2021, 2, 28), amount: 294.67},
    {id: 'e4', title: 'New Desk', date: new Date(2021, 5, 12), amount: 450}
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
