import React from 'react'
import { Task } from '../Task/Task'
import './ListTask.css'

export const ListTask = () => {

  return (
    <div className='ListTask'>
        <Task />
        <Task />
        <Task />
        <Task />
    </div>
  )
}
