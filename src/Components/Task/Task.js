import React, { useState } from 'react'
import './Task.css'
import { useDispatch } from 'react-redux'
import { editTask, toggleTask } from '../../redux'

export const Task = ({task}) => {

  let isDone = task.isDone
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState(false)
  const [newDesc,setNewDesc] = useState({id: task.id, desc: ''})

  return (
    <div className='Task'>
        <div className='description'>
            {
                (!isEdit) ? 
                    <p>{task.description}</p>
                    :
                    (
                    <>
                        <input
                        type='text'
                        className='input-edit'
                        placeholder={task.description}
                        onChange={e => setNewDesc({...newDesc, desc: e.target.value})}
                        />
                        <button
                        type='button'
                        className='edit-btn'
                        onClick={() => {
                            dispatch(editTask(newDesc))
                            setIsEdit(!isEdit)
                        }}
                        >Edit task</button>
                    </>
                    )

            }
        </div>
        <div className='task_icon'>
            <i 
                className='fa-solid fa-circle-check'
                onClick={() => {dispatch(toggleTask(task.id))}}
                style={{color: (isDone) ? 'green':'white'}}
            ></i>
            <i 
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                    setIsEdit(!isEdit)
                }}
            ></i>
        </div>
    </div>
  )
}
