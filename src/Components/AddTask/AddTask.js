import React, { useState } from 'react'
import './AddTask.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux'

const AddTask = ({setClick}) => {

  const dispatch = useDispatch()
  const [newTask,setNewTask] = useState({description:''})
  
  return (
    <div className='AddTask'>
      <h3>Add a task</h3>
      <div className='input-container'>
        <input 
        type='text'
        placeholder='Description'
        onChange={(e) => setNewTask({description : e.target.value,isDone: false})}

        required />
      </div>
      <div className='btn-container'>
        <button 
          type='submit' 
          className='add-btn'
          onClick={() => {
            dispatch(addTask(newTask));
            setClick('tasklist')
          }}
        >Add task
        </button>
      </div>
    </div>
  )
}
export default AddTask;
