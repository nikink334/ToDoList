import React, { useState } from 'react'
import "./Home.css"
import addIcon from './plus.png'

function Home() {
    const [tasks,setTasks] = useState([])
    const [newTasks,setNewTasks] = useState('')

    const addTask = () => {
        if(newTasks===''){
            alert('Please enter a task')
            return
        }
        setTasks([newTasks,...tasks])
        setNewTasks('')
    }

  return (
    <div>
      <h1 className='app-heading'>ToDo App</h1>
      
      <div className='tasks-container'>
        {
            tasks.map((task,i)=>{
                return(
                <div key={i} className='task-card'>
                    <h2 className='task-title'>{task}</h2>
                </div>)
            })
        }
      </div>

      <div className='input-container'>
        <input type='text'
          placeholder='   Add a new task'
          className='task-input'
          value={newTasks}
          onChange={(e)=>{
            setNewTasks(e.target.value)
          }}
          />
        <img src={addIcon} alt='add' className='add-icon' onClick={addTask}/>
      </div>
    </div>
  )
}

export default Home
