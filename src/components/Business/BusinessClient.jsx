import { observer } from "mobx-react";
import { useEffect } from 'react'
import BusinessStore from "../../Stores/BusinessStore";
import './business.css'
import { getBusiness } from '../../Stores/Server';

const BusinessClient = (observer(() => {

  useEffect(() => {
    getBusiness();
  }, []);

  return (
    <>
      <div>
        <h1 className="text">{BusinessStore.business.name}</h1>
        <h4 className="text"> {BusinessStore.business.description}</h4>
        <h4 className="text">{BusinessStore.business.owner}</h4>
        <h4 className="text"> {BusinessStore.business.address}</h4>
        <h4 className="text"> {BusinessStore.business.phone}</h4>
      </div>
    </>
  )
}))

export default BusinessClient

