import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../Task/Task'
import './ListTask.css'

export const ListTask = () => {
  
  const tasks = useSelector(state => state.toDo)

  return (
    <div className='ListTask'>
        {
            tasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                />
            ))
        }
    </div>
  )
}
