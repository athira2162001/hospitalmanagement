
import { margin } from '@mui/system'
import React from 'react'
import './card.css'
function Task3(props) {
  return (
    <div style={{Width: 4445 , position:'absolute'}}>
        <h2 style={{position:'absolute' , color:'white' , marginLeft:'450px', marginTop:'500px' , fontSize:'50px', justifyContent:'center'}}>{props.heading}</h2>
        <img  src={props.image}/>
    <div >
       <button  style={props.style} >{props.button}</button>
        
       </div>
    </div>
  )
}

export default Task3