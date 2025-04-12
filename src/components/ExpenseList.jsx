import React from 'react'

   const ExpenseList =({ expenses, searchTerm, handleDelete, totalAmount, setSearchTerm }) => {
                    const filteredExpenses = expenses.filter(expenses =>
                        expenses.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        expenses.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        expenses.category.toLowerCase().includes(searchTerm.toLowerCase())
                    );

  return (
    <div className='expenses-container'>
        <div className='expenses-header'>
            <h2>Your Expenses</h2>
              <div className='search-container'>
                <input
                    type='text'
                    placeholder='Search expenses..'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                >
                </input>
              </div>
              <div className='total-amount'>
                 Total: ${totalAmount.toFixed(2)}

              </div>
        </div>
           <div className='expenses-list'>
                {filteredExpenses.length === 0 ? (
                    <p className='no-expenses'>No expenses found. Add some to get started!</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {filteredExpenses.map((expense) => (
                                <tr key={expense.id}>
                                    <td>{expense.name}</td>
                                    <td>{expense.description}</td>
                                    <td>{expense.category}</td>
                                    <td>${expense.amount.toFixed(2)}</td>
                                    <td>{new Date(expense.date).toLocaleDateString()}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(expense.id)}
                                            className='delete-btn'>
                                                 Delete
                                        </button>
                                    </td>
                                    

                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
           </div>
    </div>
  )
}

export default ExpenseList;