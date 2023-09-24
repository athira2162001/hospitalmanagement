import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import  Button from '@mui/material/Button';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useParams } from 'react-router-dom';

export default function Employee() {

    const {id}=useParams()
    console.log(id);
  



  const [row, setRow]= React.useState([]);
  React.useEffect(()=>{


     axios.get(`http://localhost:4000/admin/update_viewdep/${id}`).then((data)=>{

       setRow(data.data)
       console.log(data.data);
     })
  },[])

  const [DepartmentName,setDepartmentName]=useState('')
  const [YearFounded,setYearFounded]=useState('')
  const [Description,setDescription]=useState('')
  const [Profileimage,setProfileimage]=useState('')







  const [status,setstatus]=useState(false)
  const handlesubmit = async (event)=> { event.preventDefault()
    setstatus(true)
    console.log(DepartmentName,
      YearFounded,
      Description,
      Profileimage,
      );
    
   


  }


  const handleDepartmentName =(event)=>  setDepartmentName(event.target.value)
  const handleYearFounded =(event)=>  setYearFounded(event.target.value)
  const handleProfileimage=(event)=>  setProfileimage(event.target.value)
  const handleDescription =(event)=>  setDescription(event.target.value)
 
  

  return (
    
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        marginLeft:'450PX'
      }}
    >       

<h3 style={{marginLeft:'130px',marginTop:'70px'}}> Departments</h3>

<div style={{ marginTop:'60px'}}>
        <form style={{display:'table-caption',width:'450px'}} onSubmit={handlesubmit}  >
        <label> Department Name</label>
      <TextField fullWidth label="" id="fullWidth"  onChange={handleDepartmentName} value={DepartmentName} placeholder={row.DepartmentName}/>
      <br/>
      <label>  Year Founded</label>
      <TextField fullWidth label=""   id="fullWidth" onChange={handleYearFounded} value={YearFounded} placeholder={row.YearFounded}/> 
      <br/> 
      <br/>
      <label>Description</label>
      <TextField fullWidth label="" id="fullWidth" onChange={handleDescription} value={Description} placeholder={row.Description} /> 
      < input style={{width:'430px',height:'50px',margin:'10px'}} type="file" id="myFile" name="file name" placeholder="Department Profile" onChange={handleProfileimage} value={Profileimage}  /><br/>
    
      <div style={{ marginLeft:'210px',marginTop:'40px'}}>
<Button  type='submit' variant="contained" >Add </Button> 
     

      </div>
      </form>
      </div>
       
    </Box>


  );
    }