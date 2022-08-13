import './App.css';
import { ListTask } from './Components/ListTask/ListTask';
import { useState } from 'react';
import AddTask from './Components/AddTask/AddTask'
function App() {

  const [click, setClick] = useState('')

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
            <AddTask setClick={setClick}/>
          </div>
      }

    </div>
  );
}

export default App;
