import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Nave from './Nave'
import { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import Singleview from './Singleview';
import Update from './Update'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import Axios from 'axios'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// function Data(UserName,PhoneNumber,Email,Address) {
//   return { UserName,PhoneNumber,Email,Address };
// }

// let Data = [
//   createData(1),
//   createData(2),
//   createData(3),
//   createData(4),
//   createData(5),
// ]

export default function View() {
  
 const [display,setDisplay]=useState([])
  // let navigate = useNavigate()
  // const isAuthentication = localStorage.getItem('token')!== null;
  

 const [value, setValue] = useState([])

  useEffect(()=>{
    // if(!isAuthentication){
    //  navigate('/Login')
    // }
      Axios.get(`http://localhost:8000/employe/View`)
      .then((res)=>{
        console.log(res)
        console.log("Product Response:"+JSON.stringify(res.data))
        // setDisplay(res.data)
        setValue(res.data)
      })
     .catch((error)=>{
      console.log("error:"+error)
     })
    },[])


    console.log(value,"dddddddddddddddddddddddddddddddd")

  // let _retrieveUserData = JSON.parse(localStorage.getItem('User'))
  // console.log(_retrieveUserData)
  return (
    <div>
    <div>
      <Nave/>
    </div> 
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>Sl.NO</StyledTableCell>
          <StyledTableCell align='right'>UserName</StyledTableCell>
          <StyledTableCell align="right">PhoneNumber&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Email&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Address&nbsp;</StyledTableCell>
          <StyledTableCell align="center" colSpan="3" sx={{fontSize:"2ch"}}>Action&nbsp;</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {value.data?.map((value,index) => (
          <StyledTableRow  key={value.index} >
            <StyledTableCell component="th" scope="row">
            {index}
            </StyledTableCell>
            <StyledTableCell align="right">{value.userName}</StyledTableCell>
            <StyledTableCell align="right">{value.phoneNumber}</StyledTableCell>
            <StyledTableCell align="right">{value.Email}</StyledTableCell>
            <StyledTableCell align="right">{value.Address}</StyledTableCell>
            <StyledTableCell  align="right"><Button><Link to={`/Singleview/${value._id}`}>View</Link></Button></StyledTableCell>
            <StyledTableCell  align="right"><Button>< Link to={`/update/${value._id}`}></Link>Update</Button></StyledTableCell>
            {/* <StyledTableCell  align="right"><Button  variant='contained' onClick={() =>handleDelete(value.u_id)}>Delete</Button></StyledTableCell> */}
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer><br></br>

 
 
  </div>
  )
}
