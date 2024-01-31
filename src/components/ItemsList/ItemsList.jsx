import React from 'react'
import '../ItemsList/items.css'

const ItemsList = ({task,onDone,onDelete}) => {
  return (
    <>
    
    <div className="list">
    <p>{task.age}</p>
    <p>{task.name}</p>
    <p>{task.Department}</p>
    <p>{task.address}</p>
       <div className='btn'>
       <button className='done' onClick={()=>{
        onDone(task.id)
       }} >✅</button>
        <button className='delete' onClick={()=>{
            onDelete(task.id)
        }}>❌</button>
       </div>
    </div>
    </>
  )
}

export default ItemsList
