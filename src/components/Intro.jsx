import React from 'react'
import { useState } from 'react'

const Intro = () => {
    const [ name, setName ] = useState({
        name: ' Yasir',
        age: 22,
        address: 'Karachi',
        Department: 'Computer Science'
    })
  return (
    <div>
        <h1>{name.name}</h1>
        {name.age<20? <p>You not Eligable for Test </p>: <p>You are Eligable </p>}
      
    </div>
  )
}

export default Intro
