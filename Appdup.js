import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Dep from './admin/dep';
import Employe from './admin/employe';
import Head from './admin/head';
import Home from './admin/home';
import Layout from './admin/Layout';
import Login from './admin/login';
import axios from 'axios'
import Viewemploye from './admin/viewemploye';
import Card from './card';
import Task from './task2';
import Task3 from './task3';
import Task4 from './task4';
import Task5 from './task5';
import About from './about';
import Service from './service';
import Contact from './contact';

function App() {


  let data=[
    {
      
      
  
 
  },
  
  ]














  
    {/* {
      title:'The seasons  latest',
      head:'Get the seasons all latest  desgin in a flick cli',
  image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-1-bg.png',
  button:'show more',
  style:{marginTop:'-250px', marginLeft:'60px',position:'absolute'}
  },
  
  {
    title:'Our new Designs',
    head:'Beginning with C programming: Writing the First Program in C. The following code is one of the simplest ',
image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-2-bg.png',
button:'show more',
style:{marginTop:'-200px', marginLeft:'550px',position:'absolute',textalign: 'center'}
},
{
  title:'Insiers',
  head:'Writing the First Program in C. The following code is one of seasons all latest  desgin in a flick cli',
image:'https://assets.ccbp.in/frontend/react-js/reusable-banners-card-3-bg.png',
button:'show more',
style:{marginTop:'-200px', marginLeft:'550px',position:'absolute',textalign: 'center'}
},
]

 let data=[
    {
      heading:'Social Button',
  image:'https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png'
  },
{
  button:'Like',
  style:{height:'50px', width:'150px', background:'yellow', marginLeft:'300px',marginTop:'700px'}
},
{
  button:'Command',
  style:{height:'50px', width:'200px', background:'white', marginLeft:'500px',marginTop:'700px'}
},
{
  button:'Share',
  style:{height:'50px', width:'200px', background:'blue', marginLeft:'800px',marginTop:'700px'}
},
  ]

  
  let data=[
    {
      
    title:'Super over League ',
  image:'https://assets.ccbp.in/frontend/react-js/rcb-img.png',
  
  },
{
  title:'.',
  image:'https://assets.ccbp.in/frontend/react-js/csk-img.png'
  },
  ]



 {/* let data=[
    {
      
    title:'Tom&Jerry',
    body:'mee tooo mee',
  image:'https://featuredanimation.com/wp-content/uploads/2022/01/Tom-and-Jerry-wallpaper-logo.jpeg.webp'
  
  },
  
  {
    title:'BatMan',
    body:'hloooi',
  image:'data:image/jpeg'
  },
  {
    title:'Jerry',
    body:'joooi',
  image:'./image/jerry.png'
  },
  {
    title:'Tom',
    body:'ooooi',
  image:'./image/tom.webp'
  },
  
  {
    title:'KUku',
    body:'kukuuuu',
  image:'./image/kuku.jpg'
  },
  {
    title:'Jerry',
    body:'joooi',
  image:'./image/jerry.png'
  },
  {
    title:'Tom',
    body:'ooooi',
  image:'./image/tom.webp'
  },
  
  {
    title:'KUku',
    body:'kukuuuu',
  image:'./image/kuku.jpg'
  },
  ] 
    
  
  return (
    
    <div style={{ display:'flex', justifyContent:'center', flexDirection:'row'}}>
{data.map(   (value)=>{
  return(
    <Task title= {value.title}  image={value.image}  style={value.style}/>   
  )
}   )}


    
{/* {data.map(   (value)=>{
  return(
    <Card title= {value.title} body={value .body} image={value.image}  style={value.style}/>   
  )
}   )}
return (
    <div  >
{data.map(   (value)=>{
  return(
    <Task3  image={value.image} heading={value.heading}  button={value.button} style={value.style}/>   
  )
}   )}
  
  
        
     {/* <BrowserRouter>
      <Routes>
    
       
        <Route path='/home' element={<Home/>}/>
        <Route path='/dep' element={<Dep/>}/>
        <Route path='/head' element={<Head/>}/>
        <Route path='/employe' element={<Employe/>}/>
        <Route path='/viewemploye' element={<Viewemploye/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Layout/>}></Route>
      </Routes>
  ,</BrowserRouter>  


  return (
    <div  >
{data.map(   (value)=>{
  return(
    <Task4  image={value.image} head={value.head} style={value.style} button={value.button} title={value.title}/>   
  )
}   )}*/} 

  return (
    <div  >
{data.map(   (value)=>{
  return(
    <Task5/>   
  )
}   )}
  
  <BrowserRouter>
      <Routes>
    
      <Route path='/' element={<Layout/>}>
        <Route path='task5' element={<Task5/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/>
    </Route>
       
    
      </Routes>
  </BrowserRouter>  
  
</div>
   
  )
}



export default App;
