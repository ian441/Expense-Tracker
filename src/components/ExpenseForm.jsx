import React from 'react'


const ExpenseForm =({ formData, handleInputChange, handleSubmit}) => {

const categories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Transportation' },
  { id: 3, name: 'Housing' },
  { id: 4, name: 'Entertainment' },
  { id: 5, name: 'Healthcare' },
  { id: 6, name: 'Education' },
  { id: 7, name: 'Other' },


]


  return (
    <div className='form-contaner'>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <label>Expense Name*</label>
             <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder='Enter expense name'
             />
        </div>
         <div className='form-group'>
            <label>Description</label>
                <textarea
                    name='description'
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder='Enter description'
                />
         </div>
            <div className='form-group'>
                <label>Category</label>
                 <select 
                    name='category'
                    value={formData.categories}
                    onChange={handleInputChange}
                    className="category-select"
                    required
                  

                   >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                    ))}
                 </select>
            </div>
            <div className='form-group'>
                <label>Amount</label>
                <input
                    type='number'
                    name='amount'
                    value={formData.amount}
                    onChange={handleInputChange}
                    placeholder='Enter amount'
                    required
                ></input>
            </div>
            <div className='form-group'>
                  <label>Date</label>
                    <input
                        type='date'
                        name='date'
                        value={formData.date}
                        onChange={handleInputChange}
                    >
                    </input>
            </div>

            <button type='submit' className='submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default ExpenseForm