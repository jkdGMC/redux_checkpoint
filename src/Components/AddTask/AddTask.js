import React from 'react'
import './AddTask.css'
 
const AddTask = () => {
  return (
    <div className='AddTask'>
      <h3>Add a task</h3>
      <div className='input-container'>
        <input type='text' placeholder='Description' required />
      </div>
      <div className='btn-container'>
        <button type='submit' className='add-btn'>Add task</button>
      </div>
    </div>
  )
}
export default AddTask;
