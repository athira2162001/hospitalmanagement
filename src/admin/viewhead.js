import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from  '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


export default function BasicTable() {



const [dept, setDept]= useState([])

const navigator=useNavigate()
const handledel=  (id)=>{
 axios.post(`http://localhost:4000/admin/dlte_head/${id}`)
}



React.useEffect(()=>{ result()},[])
   async function result (){
    let response =await axios.get("http://localhost:4000/admin/depthead")
    setDept(response.data)
  }

console.log(dept,'----')

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 ,margin:'290px',marginTop:'150px',background:'lightgray' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Employee No</TableCell>
            <TableCell>Age</TableCell>
            <TableCell >Description</TableCell>
            <TableCell >Department</TableCell>
            <TableCell >Profile Image</TableCell>
            <IconButton>
  <DeleteIcon />
</IconButton>
<IconButton aria-label="edit">
  <EditIcon />
</IconButton>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {dept.map((dept) => (
            <TableRow
              key={dept.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{dept.Name}</TableCell>
              <TableCell >{dept.Employeeno}</TableCell>
              <TableCell >{dept.Age}</TableCell>
              <TableCell >{dept.Description}</TableCell>
              <TableCell >{dept.DepatmentName}</TableCell>
              <TableCell >{dept.Profileimage}</TableCell>
              <TableCell ><Button onClick ={()=>handledel(dept._id)}>
                
              <IconButton aria-label="delete">
  <DeleteIcon /></IconButton></Button></TableCell>

  <TableCell >
    <Link to={`/update_head/${dept._id}`}>
    Edit
    </Link>
  <Button>
              
    <EditIcon /></Button></TableCell>

             
   
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}