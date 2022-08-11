import './App.css';
import { ListTask } from './Components/ListTask/ListTask';
import {  useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import AddTask from './Components/AddTask/AddTask'
function App() {

  const location = useLocation()
  const navigate = useNavigate()
  const [click, setClick] = useState('')
  console.log(click)

  return (
    <div className="App">
      <div className='nav'>
        <button type='button' onClick={() => setClick('tasklist')}>Tasks List</button>
        <button type='button' onClick={() => setClick('addtask')}>Add Task</button>
      </div>
      {
        (click === 'tasklist') ?
        <div className='taskList'>
          <ListTask />
        </div>
        :
        (click === '') ?
          <div className='taskList'>
            <ListTask />
          </div>
          :
          <div className='taskList'>
            <AddTask />
          </div>
      }

    </div>
  );
}

export default App;
