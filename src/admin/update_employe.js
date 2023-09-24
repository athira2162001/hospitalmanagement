import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem  from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useParams } from 'react-router-dom';

export default function Updateemploye() {
  const {id}=useParams()
  console.log(id);
  
  
  const [view, setview]= useState([]);
  
  useEffect(()=>{
  axios.get("http://localhost:4000/admin/employe").then(({data})=>{
    setview(data)
    console.log(data);
  })
  
  
},[])
const [dept, setDept]= React.useState([]);
  React.useEffect(()=>{


     axios.get(`http://localhost:4000/admin/update_viewemploye/${id}`).then((data)=>{

       setDept(data.data)
       console.log(data.data);
     })
  },[])


const [rep, setRep]= React.useState([]);
  React.useEffect(()=>{results() },[]);
    async function  results(){
     await axios.get("http://localhost:4000/admin/employereport").then(({data})=>{

       setRep(data)
       console.log(data);
     })
    }



  
  const [Name,setName]=useState('')
  const [Employeeno,setEmployeeno]=useState('')
  const [Age,setAge]=useState('')
  const [Description,setDescription]=useState('')
  const [Profileimage,setProfileimage]=useState('')
  const [Department,setDepartment]=useState('')
  const [Report,setReport]=useState('')
  const [status,setstatus]=useState(false)
  const handlesubmit = async (event)=> { event.preventDefault()
    setstatus(true)
    console.log(Name,
      Employeeno,Age,
      Description,
      Profileimage,Department,Report,
      );
    
    


  }


  const handleName =(event)=>  setName(event.target.value)
  const handleEmployeeno =(event)=>  setEmployeeno(event.target.value)
  const handleAge =(event)=>  setAge(event.target.value)
  const handleDescription =(event)=>  setDescription(event.target.value)
  const handleProfileimage=(event)=>  setProfileimage(event.target.value)
  const handleDepartment =(event)=>  setDepartment(event.target.value)
  const handleReport =(event)=>  setReport(event.target.value)

  return (
    <>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft:'450PX'
      }}
    >       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}>  Edit Employee </h3>

<div style={{ marginTop:'60px'}}>
<Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 66, height: 66,marginLeft:25 }}
/>
        <form style={{display:'table-caption',width:'450px'}} onSubmit={handlesubmit} >
        <label> Name</label>
      <TextField fullWidth label="" id="fullWidth"  onChange={handleName} value={Name} placeholder={view.Name} />
      <br/>
      <label>  Employee No</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleEmployeeno} value={Employeeno} placeholder={view.Employeeno}/> 
      <br/> 
      <label>  Age</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleAge} value={Age} placeholder={view.Age}/> 
      <br/>
      <br/>
      <label>Description</label>
      <TextField fullWidth label="" id="fullWidth" onChange={handleDescription} value={Description} placeholder={view.Description} /> 
      <br/><br/>
      <FormControl sx={{ width:'100%' }}>
 <InputLabel sx={{ ml:' -50', mt: '3' }} id='demo-simple-select-label'>Department</InputLabel>
 <Select
 Name='DepartmentName'
 Sx={{Ml: '-50', Mt:'4', Width:'600px','& .MuiSelect-select': { minWidth: '100px' }}}
 label Id='demo-simple-select-label'
 id='demo-simple-select'
 value={Department.DepartmentName} placeholder={view.DepartmentName}
 onChange={handleDepartment}
 >
 {view.map((value) => {
  console.log(value,'values');
 return (                                                                                                     
 <MenuItem value={value.DepartmentName}>{value.DepartmentName}</MenuItem>
 )
 })}
 </Select>
 </FormControl>
 <br/>




<br/>

 <FormControl sx={{ width:'100%' }}>
 <InputLabel sx={{ ml:' -50', mt: '3' }} id='demo-simple-select-label'>Report</InputLabel>
 <Select
 Name='Report'
 Sx={{Ml: '-50', Mt:'4', Width:'600px','& .MuiSelect-select': { minWidth: '100px' }}}
 label Id='demo-simple-select-label'
 id='demo-simple-select'
 value={Name.Name} placeholder={view.Department}
 onChange={handleReport}
 >
 {rep.map((value) => {
 return (                                                                                                     
 <MenuItem value={value.Name}>{value.Name}</MenuItem>
 )
 })}
 </Select>
 </FormControl>
 <br/>
     
      
    
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>




<Button  type='submit' variant="contained" >Add </Button> 
     

      </div>
      </form>
      </div>
        
    </Box>
    </>

  );
    }