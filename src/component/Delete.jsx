import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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


  
 function Delete({setOpen,selectedUser,data,setData}) {
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleDelete = async (id) =>{
        console.log("id :"+id);
        const updateData = data.filter((e) =>e.u_id !==id);
        console.log(updateData);
        setData(updateData);
        localStorage.setItem("User",JSON.stringify(updateData));
        await setOpen(false);
    }
    return (
      <Card sx={{style}}>
        <CardContent>
         
          <Typography textAlign="center" sx={{ mb: 1.5 }} color="text.secondary">
            ARE SURE ,YOU WANT DELETE THE RECORDS?
          </Typography>
         
        </CardContent>
        <CardActions>
          <Button textAlign="center"  onClick={handleClose}>Cancel</Button>
          <Button textAlign="center" onClick={()=>handleDelete(selectedUser)}>Delete</Button>
        </CardActions>
      </Card>
    );
  }
  export default Delete;