import React from 'react'

function Task4(props) {
  return (
    <div>
       
        <img style={{height:'270px',width:'1350px', margin:'20px' }} src={props.image}/>
      
        <div  style={props.style}>
        <h2 style={{color:'navy'}}>{props.title}</h2>
        <h6 style={{color:'navy'}}>{props.head}</h6>
        <button style={{color:'navy',marginLeft:'120px'}}>{props.button}</button>
        </div>
        
    </div>
    
  )
}

export default Task4