import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import Dep from './admin/dep';
import Employe from './admin/employe';
import Head from './admin/head';

import Layout from './admin/layout';
import Login from './admin/login';
import axios from 'axios'
import Viewemploye from './admin/viewemploye';
import Viewdep from './admin/viewdep';
import Viewhead from './admin/viewhead';
import Updateemploye from './admin/update_employe';
import Updatedep from './admin/update_dep';
import Updatehead from './admin/update_head';

function App() {


 
  
  return (
    
    <div>

        
     <BrowserRouter>
      <Routes>
    
       
    <Route path='/' element={<Layout/>}>
        <Route path='dep' element={<Dep/>}/>
        <Route path='employe' element={<Employe/>}/>
        <Route path='viewemploye' element={<Viewemploye/>}/>
        <Route path='head' element={<Head/>}/>
        <Route path='viewdep' element={<Viewdep/>}/>
        <Route path='viewhead' element={<Viewhead/>}/>
        </Route>
         <Route path='login' element={<Login/>}/>
        <Route path='update_head/:id' element={<Updatehead/>}/>
        <Route path='update_dep' element={<Updatedep/>}/>
        <Route path='update_employe' element={<Updateemploye/>}/>
        
      </Routes>
  </BrowserRouter>  


 
  
</div>
   
  )
}



export default App;
