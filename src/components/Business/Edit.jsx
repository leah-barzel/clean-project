import { observer } from "mobx-react";
import { useState } from 'react'
import { TextField} from "@mui/material";
import Button from '@mui/material/Button';
import BusinessStore from "../../Stores/BusinessStore";
import {putBusiness} from '../../Stores/Server';
import Stack from '@mui/material/Stack';
import './business.css'

const Edit=(observer(({func})=> {

const [formData, setFormData] = useState(BusinessStore.business);

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  func();
  BusinessStore.editDeataild(formData);
  putBusiness(formData);
  BusinessStore.markIsEdit();
}

    return (
      <>
      <div className="business">
       <form onSubmit={handleSubmit} >
       <Stack spacing={2}>
       <TextField  label="שם" name="name" value={formData.name} onChange={handleChange} />

       <TextField  label="כתובת" name="address" value={formData.address} onChange={handleChange} />

       <TextField  label="טלפון"name="phone" value={formData.phone} onChange={handleChange} />

       <TextField  label="בעלים" name="owner" value={formData.owner} onChange={handleChange} />

       <TextField  label="תיאור" name="description" value={formData.description} onChange={handleChange} />

       <Button type='submit' variant="contained"> שמור</Button>
       </Stack>
       </form>
       </div>
       
      </>
    )
  }))
  
  export default Edit