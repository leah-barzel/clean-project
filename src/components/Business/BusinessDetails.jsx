import { observer } from "mobx-react";
import { useEffect } from 'react'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import BusinessStore from "../../Stores/BusinessStore";
import './business.css'
import { getBusiness, putBusiness } from '../../Stores/Server';

const BusinessDetails = (observer(({ func }) => {
    
    useEffect(() => {
        putBusiness(BusinessStore.business);
        getBusiness();
    }, []);

    const handleEdit = () => {
        func();
    }

    return (
        <>
            <div className="h1">
                <div className="edit"><Fab aria-label="edit" onClick={handleEdit}> <EditIcon />  </Fab></div>
                <h1 className="text">{BusinessStore.business.name}</h1>
                <h3 className="text"> {BusinessStore.business.description}</h3>
                <h3 className="text">{BusinessStore.business.owner}</h3>
                <h3 className="text"> {BusinessStore.business.address}</h3>
                <h3 className="text"> {BusinessStore.business.phone}</h3>
            </div>
        </>
    )
}))


export default BusinessDetails