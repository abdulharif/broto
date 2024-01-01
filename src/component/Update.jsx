import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import  Axios  from 'axios';
import '../css/insert.css'
import { useNavigate, useParams } from 'react-router';



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
  
function Update() {
  const navigate = useNavigate()
    // const [updateUser,setUpdatedUser] = useState()

  // const [index,setIndex] = useState('');
  // useEffect(()=>{
  //   const index=(data.findIndex((e)=>e.u_id === selectedUser.u_id))
  //   setIndex(index);
  // })
  // console.log(index)


  let params  = useParams()
  const id = params.id
  console.log(id,"user")
  const [state,setState]=useParams({})
useEffect(()=>{
  Axios.get(`http://localhost:8000/employe/singleview/${id}`)
  .then((res)=>{
    console.log(res.data,'res.data')
    setState(res.data)
  })
  .catch((error)=>{
    console.log(error,'error')
  })
},[])

  const handleChange = (e)=>{
    setState({
        ...state,
        [e.target.name]:e.target.value,
    });
  };
  console.log(state,"hdgtiywger")

  const handlesubmit = async (e)=>{
    Axios.put(`http://localhost:8000/employe/update/${id}`,state)
    .then((res)=>{
      console.log("updated product"+JSON.stringify(res.data))
    })
    .catch((error)=>{
      console.log(error.message)
    })
    navigate('/View')
  }

  // console.log(updateUser);

  // const handlesubmit = async (e)=>{
  //   e.preventDefault()
  //   const updateData =[...data];
  //   updateData.splice(index,1,updateUser);
  //   console.log(updateData);
  //   setData(updateData)
  //   localStorage.setItem('User',JSON.stringify(updateData))
  //   await setOpen3(false)

  // }
  return (
    <div>       
        <Card sx={{style}}>
    
     
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
    <TextField  onChange={handleChange} id="outlined-basic" value={state.userName} name='userName'  label="UserName" variant="outlined" />
    <TextField  onChange={handleChange} id="outlined-basic" value={state.phoneNumber} name= 'phoneNumber'  label="PhoneNumber" variant="outlined" color='primary' />
    <TextField  onChange={handleChange} id="outlined-basic"  value={state.Email} name = 'Email' label="Email" variant="outlined" />
    <TextField  onChange={handleChange}
          id="outlined-multiline-static"
          name='Address'
          label="Address"
          multiline
          rows={4}
          value={state.Address}
          // defaultValue="Default Value"
        />
  </Box> 
  <Button  onClick={handlesubmit} variant="contained" sx={{marginLeft:'5cm'}} disableElevation>
      Sumbit Button
    </Button>


  </div>
  
</Card>
  </div>
  )
}

export default Update