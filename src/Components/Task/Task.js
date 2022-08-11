import React from 'react'
import './Task.css'

export const Task = () => {
  
//   const test = e => {
//     e.preventDefault()
//     let icons = document.querySelectorAll('.fa-solid')
//     console.log(icons)
//     for (let icon of icons)
//         icon.classList.toggle('active')
    
//   }
// onClick={e => test(e)

  return (
    <div className='Task'>
        <div className='description'>
            <p>description</p>
        </div>
        <div className='task_icon'>
            <i className="fa-solid fa-circle-check"></i>
        </div>
    </div>
  )
}
