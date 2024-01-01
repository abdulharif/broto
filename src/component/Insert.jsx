import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

import '../css/insert.css';
import Nave from "./Nave";



export default function Insert() {
let navigate = useNavigate()
 const isAuthentication = localStorage.getItem('token')!==null;

 useEffect(()=>{
  if(!isAuthentication){
    if(!isAuthentication){
      navigate('/Login')
     }
  }
 })
  
  let initialValue;
  
  if(localStorage.getItem('User') === null){
    initialValue  = [];
    
  }else{
    initialValue = JSON.parse(localStorage.getItem("User"));

  }
  const [value,setValue] = useState(initialValue);
  const [user,setUser] = useState({
    userName: "",
    phoneNumber: " ",
    Email:" ",
    Address:" "
  }
  );

  const handleChange =(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }
 console.log(user)

 const handlesubmit = async (event) =>{
  event.preventDefault();


  await Axios.post(`http://localhost:8000/employe/insert`,user)
  .then((res)=>{
    console.log(res)
    navigate('/View')
  })
  .catch((error)=>{
    console.log("Error:"+error)


  })
 
  // const {userName,phoneNumber,Email,Address}= user
  // if(userName === ""){
  //   alert("name feild is required")
  // }
  // else if(phoneNumber.length >= 10 ){
  //   alert("phone number is 10 digit required")
  // }
  // else if(Email.includes("@")){
  //   alert("please enter @ gmail")
  // }
  // else if(Address.length >= 20 ){
  //   alert("please enter your address")
  // }
  // else{
  //  alert("data not added")
  // }
  
  
  // const newUserId = value.length === 0 ? 1 :value[value.length - 1].u_id + 1;
  // const details = {
  //   u_id : newUserId,
  //   ...user
  // };

  // const updatedValue = [...value,details];
  // setValue(updatedValue);


  // localStorage.setItem("User",JSON.stringify(updatedValue));
  // await navigate('/View')
  }

 
  return (
        <div>
          
       <Nave />
        
    
<div className='Container'>
   <Typography textAlign="center">FILL YOUR DETAILS</Typography>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 3, width: '55ch' },
    }}
    noValidate
    autoComplete="off"
  > 
    <TextField  onChange={handleChange} id="outlined-basic" name='userName'  label="UserName" variant="outlined" />
    <TextField  onChange={handleChange} id="outlined-basic" name= 'phoneNumber'  label="PhoneNumber" variant="outlined" />
    <TextField  onChange={handleChange} id="outlined-basic"  name = 'Email' label="Email" variant="outlined" />
    <TextField  onChange={handleChange}
          id="outlined-multiline-static"
          name='Address'
          label="Address"
          multiline
          rows={4}
          // defaultValue="Default Value"
        />
  </Box> 
  <Button  onClick={handlesubmit} variant="contained" sx={{marginLeft:'5cm'}} disableElevation>
      Sumbit Button
    </Button>


  </div>
  </div>
    
  )
}
