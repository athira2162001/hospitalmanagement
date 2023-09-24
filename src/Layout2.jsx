
import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import ReactDOM from "react-d";
const Layout = (props) => {
  return (
    <div> 
        <img  style={{width:'1400px',height:'600px'}}src='https://images.unsplash.com/photo-1529485726363-95c8d62f656f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' />
        <div >
      <Link to="/" style={{ marginLeft:'950px',marginTop:'-550px',color:'white',position:'absolute',wordSpacing:'20px'}}>Home</Link>
      <Link to="/service" style={{ marginLeft:'750px',marginTop:'-550px',color:'white',position:'absolute',wordSpacing:'20px'}}>Service</Link>
      <Link to="/contact" style={{ marginLeft:'650px',marginTop:'-550px',color:'white',position:'absolute',wordSpacing:'20px'}}>Contact</Link>
      <Link to="/about" style={{ marginLeft:'850px',marginTop:'-550px',color:'white',position:'absolute',wordSpacing:'20px'}}>About</Link>
     </div>
     <div style={{ marginLeft:'450px',marginTop:'-300px',color:'white'}}>
     
     
     <h2 style={{marginRight:'500px',color:'white'}}>Create Good Free Templates</h2>
     <h6  ></h6>
  
     <button  style={{background:'green'}}>GET STARTED</button>
     </div>
     <Outlet />
 </div>
  )
}

export default Layout

