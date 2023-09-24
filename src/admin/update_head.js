import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem  from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormControlLabel, FormHelperText, Input, InputLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';

export default function Updatehead() {
  const {id}=useParams()
  console.log(id);

  const [view, setView]= React.useState([]);

  React.useEffect(()=>{
  
    axios.get("http://localhost:4000/admin/heads").then(({data})=>{

     setView(data)
     console.log(data);
   })
  },[])


  const [dept, setDept]= React.useState([]);
  React.useEffect(()=>{


     axios.get(`http://localhost:4000/admin/update_viewhead/${id}`).then((data)=>{

       setDept(data.data)
       console.log(data.data);
     })
  },[])
  



 
   
  const [Name,setName]=useState('')
  const [Employeeno,setEmployeeno]=useState('')
  const [Age,setAge]=useState('')
  const [Description,setDescription]=useState('')
  const [Profileimage,setProfileimage]=useState('')
  const [Department,setDepartment]=useState('')
  const [status,setstatus]=useState(false)
  const handlesubmit = async (event)=> { event.preventDefault()
    setstatus(true)
    console.log(Name,
      Employeeno,Age,
      Description,
      Profileimage,Department,
      );
    
    
    

  }


  const handleName =(event)=>  setName(event.target.value)
  const handleEmployeeno =(event)=>  setEmployeeno(event.target.value)
  const handleAge =(event)=>  setAge(event.target.value)
  const handleDescription =(event)=>  setDescription(event.target.value)
  const handleProfileimage=(event)=>  setProfileimage(event.target.value)
  const handleDepartment =(event)=>  setDepartment(event.target.value)
  

  return (

  <>
<Box
      sx={{ width: 500,maxWidth: '100%', marginLeft:'450PX'}}>       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}> Department Head</h3>

<div style={{ marginTop:'60px'}}>
        <form style={{display:'table-caption',width:'450px'}} onSubmit={handlesubmit} >
        <label> Name</label>
      <TextField fullWidth label="" id="fullWidth"  onChange={handleName} value={Name} placeholder={dept.Name} />
      <br/>
      <label>  Employee No</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleEmployeeno} value={Employeeno} placeholder={dept.Employeeno}/> 
      <br/> 
      <label>  Age</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleAge} value={Age} placeholder={dept.Age}/> 
      <br/>
      <br/>
      <label>Description</label>
      <TextField fullWidth label="" id="fullWidth" onChange={handleDescription} value={Description}  placeholder={dept.Description}/> 
      <br/><br/>
      <FormControl sx={{ width:'100%' }}>
 <InputLabel sx={{ ml:' -50', mt: '3' }} id='demo-simple-select-label'>Department</InputLabel>
 <Select
 Name='DepartmentName'
 Sx={{Ml: '-50', Mt:'4', Width:'600px','& .MuiSelect-select': { minWidth: '100px' }}}
 label Id='demo-simple-select-label'
 id='demo-simple-select'
 value={Department.DepartmentName} placeholder={dept.DepartmentName}
 onChange={handleDepartment}
 >
 {view.map((value) => {
 return (
  <MenuItem value={value.DepartmentName}>{value.DepartmentName}</MenuItem> 
  )
})}

 </Select>
 </FormControl>
      
      < input style={{width:'430px',height:'50px',margin:'10px'}} type="file" id="myFile" name="file name" placeholder="Department Profile" onChange={handleProfileimage} value={Profileimage}/><br/>
    
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>
<Button  type='submit' variant="contained" >Add </Button> 
     

      </div>
      </form>
      </div>
       
       
    </Box>

    
</>

  )
    }