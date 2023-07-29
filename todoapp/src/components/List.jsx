import React from 'react'
import Card from './Card'

const List = ({tasks, deleteTasks,updatetask}) => { 
    console.log(tasks);
  return (
    <div className='mt-3'>
      <Card tasks={tasks} deleteTasks = { deleteTasks } updatetask={updatetask}/>
    </div>
  )
}

export default List