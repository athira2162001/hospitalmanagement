import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import axios from 'axios';
import MenuItem  from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';

export default function Employe() {

  
  // useEffect(()=>{employe() },[]);
  //   async function  employe(){
  //   await axios.get("http://localhost:4000/admin/employees").then(({data})=>{
    //   setview(data)
  //   console.log(data);
  //   })
  // }
  const [view, setview]= useState([]);
  
  useEffect(()=>{
  axios.get("http://localhost:4000/admin/employees").then(({data})=>{
    setview(data)
    console.log(data);
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
    
    let resposne =await axios.post("http://localhost:4000/admin/employe",{Name,Employeeno,Age,Description,Profileimage,Department,Report})


  }


  const handleName =(event)=>  setName(event.target.value)
  const handleEmployeeno =(event)=>  setEmployeeno(event.target.value)
  const handleAge =(event)=>  setAge(event.target.value)
  const handleDescription =(event)=>  setDescription(event.target.value)
  const handleProfileimage=(event)=>  setProfileimage(event.target.value)
  const handleDepartment =(event)=>  setDepartment(event.target.value)
  const handleReport =(event)=>  setReport(event.target.value)

  return (
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft:'450PX'
      }}
    >       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}> Employee </h3>

<div style={{ marginTop:'60px'}}>
        <form style={{display:'table-caption',width:'450px'}} onSubmit={handlesubmit} >
        <label> Name</label>
      <TextField fullWidth label="" id="fullWidth"  onChange={handleName} value={Name} />
      <br/>
      <label>  Employee No</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleEmployeeno} value={Employeeno}/> 
      <br/> 
      <label>  Age</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleAge} value={Age}/> 
      <br/>
      <br/>
      <label>Description</label>
      <TextField fullWidth label="" id="fullWidth" onChange={handleDescription} value={Description} /> 
      <br/><br/>
      <FormControl sx={{ width:'100%' }}>
 <InputLabel sx={{ ml:' -50', mt: '3' }} id='demo-simple-select-label'>Department</InputLabel>
 <Select
 Name='DepartmentName'
 Sx={{Ml: '-50', Mt:'4', Width:'600px','& .MuiSelect-select': { minWidth: '100px' }}}
 label Id='demo-simple-select-label'
 id='demo-simple-select'
 value={Department.DepartmentName}
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
 value={Name.Name}
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
     
      < input style={{width:'430px',height:'50px',margin:'10px'}} type="file" id="myFile" name="file name" placeholder="Department Profile" onChange={handleProfileimage} value={Profileimage}/><br/>
    
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>




<Button  type='submit' variant="contained" >Add </Button> 
     

      </div>
      </form>
      </div>
        {
          status&&
      <div>
        <p>Name:{Name}</p>
        <p>Employeeno:{Employeeno}</p>  
        <p>Age:{Age}</p>  
        <p>Description:{Description}</p> 
        <p>Department:{Department}</p>
        <p>Report:{Report}</p>
        <p>Profileimage:{Profileimage}</p>
        
      </div>
        }
    </Box>


  );
    }