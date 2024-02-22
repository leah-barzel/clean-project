import { useState } from 'react'
import {Link} from "react-router-dom"
import Busines from '../Business/Business';
import ServiceAdmin from '../Services/ServiceAdmin';
import MeetingColor from '../Meeting/MeetingColor';
import { Button } from '@mui/material'; 
import Stack from '@mui/material/Stack';
import './admin.css'


function AdminPage() {
const [isServing,setIsServing]=useState(false);

 const handleService=()=>{
  setIsServing(true);
  }
  const handleMeet=()=>{
   setIsServing(false);
    }
  return (
    <> <div className='buttons'>
    <Stack spacing={3}>
     <Busines></Busines>
     <Link to ={"services"}><Button variant="contained" onClick={handleService}>שירותים</Button></Link>
     <Link to ={"meetings"}><Button variant="contained" onClick={handleMeet}>פגישות</Button></Link>
    </Stack></div>
      {isServing? <ServiceAdmin></ServiceAdmin>:<MeetingColor></MeetingColor>}
    </>
  )
}

export default AdminPage