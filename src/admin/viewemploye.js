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



const [view, setview]= useState([])

const handledel=  (id)=>{
  axios.post(`http://localhost:4000/admin/dlte_employe/${id}`)
 }

  React.useEffect(()=>{result() },[])
  async function result (){
    let response =await axios.get("http://localhost:4000/admin/viewemploye")
    setview(response.data)


  }

console.log(view)

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
            <TableCell >Report</TableCell>
            <TableCell >Profile Image</TableCell>
            <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton aria-label="edit">
  <EditIcon />
</IconButton>
          </TableRow>
        </TableHead>
        <TableBody>
          {view.map((view) => (
            <TableRow
              key={view.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{view.Name}</TableCell>
              <TableCell >{view.Employeeno}</TableCell>
              <TableCell >{view.Age}</TableCell>
              <TableCell >{view.Description}</TableCell>
              <TableCell >{view.Depatment}</TableCell>
              <TableCell >{view.Report}</TableCell>
              <TableCell >{view. Profileimage}</TableCell>
              {/* <TableCell align="right">{ro/w.}</TableCell> */}
              <TableCell ><Button onClick ={()=>handledel(view._id)}>
                
                <IconButton aria-label="delete">
    <DeleteIcon /></IconButton></Button></TableCell>
    <TableCell >
    <Link to={`/update_employe/${view._id}`}>
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