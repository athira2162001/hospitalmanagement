import React, {useState} from 'react'
import axios from 'axios'

function Dep() {

  const [departmentname, setDepartmentName] = useState("");
 
  const [profileImage, setProfileImage] = useState("");
  const [yearFounded, setYearFounded] = useState("");
  const [description, setDescription] = useState("");
  const [status,setstatus]=useState(false)
  const handlesubmit =async (event)=>{ event.preventDefault()
    setstatus(true)
    console.log(departmentname,
      yearFounded,
      description,);
    let response =await axios.post("http://localhost:4000/admin/dep",{departmentname,yearFounded,description})
   
}

const handledepartmentname =(event)=>setDepartmentName(event.target.value)
const handleprofileimage=(event)=> setProfileImage(event.target.value)
const handleyearfounded=(event)=> setYearFounded(event.target.value)
const handledescription=(event)=> setDescription(event.target.value)
  
  return (
  
      <div style={{marginTop:'-550px',padding:'650px',background:'lightgray',marginLeft:'-170px'}}>
  < form style={{display:'table-caption'}} onSubmit={handlesubmit} />

<h4 style={{fontFamily:'cursive',textAlign:'center'}}>DEPARTMENT DETAILS</h4>
   
    <label for="Department"  placeholder="Department Name" onChange={handledepartmentname} value={departmentname}></label>
    <select style={{width:'330px',height:'50px',margin:'10px'}} name="types" required>
        <option value="">Department Name</option>
      <option value="ent">ENT</option>
      <option value="eye">EYE</option>
       <option value="p">RADIOLOG</option>
      <option value="general">general</option>
      
    </select><br/>
    
    <input style={{width:'330px',height:'50px',margin:'10px'}} type="Year"   placeholder="Year Founded" onChange={handleyearfounded} value={yearFounded}/><br/>


<input style={{width:'330px',height:'50px',margin:'10px'}}type="text"   placeholder="Description"  onChange={handledescription} value={description}/><br/>
   
   < input style={{width:'430px',height:'50px',margin:'10px'}} type="file" id="myFile" name="file name" placeholder="Department Profile" onChange={handleprofileimage} value={profileImage}/><br/>
    <button style={{width:'90px',height:'40px',margin:'50px',marginleft:'290px'}} type="submit" class="okey">Add</button>
    <div style={{ marginLeft:'210px',marginTop:'40px'}}>
     
      </div>
  <form/>
  {
      <div>
        
        <p>departmentname :{departmentname}</p>
        <p>profileImage :{profileImage}</p>
        <p>yearFounded :{yearFounded}</p>
        <p>description :{description}</p>
      </div>
    }
</div> 
  )
}

export default Dep;







viewdep





import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState}  from 'react';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('ENT', ),
  createData('EYE', ),
  createData('General', ),
 
];

export default function BasicTable() {

const [dept,setdept]=useState([]);
React.useEffect(()=>{
result()
},[])

async function result (){
  let response=await axios.get("http://localhost:4000/admin/dep")
  setdept(response.data)
}
console.log(dept,'---------')

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50,margin:'290px',marginTop:'150px',background:'lightgray'  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Year Founded</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.dep}
              </TableCell>
              <TableCell align="right">{row.yearFounded }</TableCell>
              <TableCell align="right">{row.description }</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}