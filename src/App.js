import './App.css';
import { ListTask } from './Components/ListTask/ListTask';
import { Link, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <div className='nav'>
        <button type='button'>Tasks List</button>
        <button type='button'>Add Task</button>
      </div>
      <div className='taskList'>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
