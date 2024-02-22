import { useState } from "react"
import { observer } from "mobx-react";
import BusinesStore from "../../Stores/BusinessStore";
import Edit from './Edit'
import BusinessDetails from "./BusinessDetails";

const Business = (observer(() => {
const [isEdit,setIsEdit]=useState(BusinesStore.isEdit);
    
  const  handleEdit=()=>{
    BusinesStore.markIsEdit()
    setIsEdit(BusinesStore.isEdit);
    }
  
    return (
        <>
        {isEdit?<Edit func={handleEdit}></Edit>
        :<BusinessDetails func={handleEdit}></BusinessDetails>}
        </>
    )
}))
export default Business
