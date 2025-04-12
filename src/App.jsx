import React,{ useState } from "react";
import './App.css';
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: new Date().toISOString().slice(0, 10)
  });

  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
       ...formData,
       [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) return;
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    }
     setExpenses([...expenses, newExpense]);
      setFormData({
        name: '',
        description: '',
        category: 'Food',
        amount: '',
        date: new Date().toISOString().slice(0, 10)

      })
  }
      const handleDelete = (id) => {
         setExpenses(expenses.filter(expense => expense.id !== id))
      }
      const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
       
      return (
        <div className="app">
          <Header />

          <div className="container">
            <ExpenseForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          

          <ExpenseList 
              expenses={expenses}
              searchTerm={searchTerm}
              handleDelete={handleDelete}
              totalAmount={totalAmount}
              setSearchTerm={setSearchTerm}
          />

          </div>
        </div>
      );
}
export default App;