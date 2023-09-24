import React from 'react'


function Task(props) {
  return (
    
    <div className='card'>
        
            <h2 >{props.title}</h2>
           <img src={props.image}/>
       
    </div>
    
   
  )
}

export default Task