import React, { useState } from 'react'
import '../TodList/TodList.css'
import ItemsList from '../ItemsList/ItemsList'

const TodoList = () => {
    // const task= JSON.parse(localStorage.getItem('task'))
    const [items,setItems]=useState([])
    // input Text 
    const [inputData,setInputData]=useState("")


    // Event Listener
    const handleInputChange=(e)=>{
         setInputData(e.target.value)
    }

    const dataSubmit=(e)=>{
        e.preventDefault();
       console.log(inputData);
      const task={
        id:Math.floor(Math.random()*300000000000),
        name:inputData

      };
      const previosData=items;
       setItems([...previosData,task]);
       setInputData([''])
    //    localStorage.setItem('Task',JSON.stringify([...previosData,task]))


    };
const clearAll=()=>{
    setItems([])
}
const markDone=(id)=>{
    const updateList=items.map((ele)=>{

        return ele==id;


    })
    setItems(updateList);
console.log('Done ',id);
}
const markDelete=(id)=>{
   console.log('Deleted',id);
   const updateList=items.filter((ele)=>{
    return ele.id !== id;


})
setItems(updateList);

}
  return (
   <>
    <h1>Todo List</h1>
    <div className="container">
        <h3>Make the Task of the  Day</h3>
        <div className="inputBox">
            <p>Select The Task ✏️ </p>
            <div className='input'>
            
                <form action="">
                    <input type="text" name="" id="" value={inputData} onChange={handleInputChange} />
                    <button onClick={dataSubmit}>Add Task</button>
                </form>
            </div>
        </div>
        <h3>Task List</h3>
          {
            items.map((task,index)=>(
                <ItemsList key={index} task={task} onDone={markDone} onDelete={markDelete} />
            ))
          }
        {items.length !==0 && (
        <div>
        <button className='clearAll' onClick={clearAll}>Clear All </button>
    </div>
)}
    </div>
   
   </>
  )
}

export default TodoList
