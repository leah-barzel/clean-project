import BusinessClient from "../Busines/BusinessClient"
import ServiceClient from "../Services/ServiceClient"



function Customer() {

    return (
      <>
      <BusinessClient></BusinessClient>
      <ServiceClient></ServiceClient>
      </>
    )
  }
  
  export default Customer