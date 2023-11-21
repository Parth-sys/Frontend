
import React, { useEffect, useState } from "react"



function Order(){

useEffect(()=>{

  handelsubmit()
},[])


const [orders,setorders]=useState([]);




 const handelsubmit=async(e)=>{
    e.preventDefault();
    try {
      const res= await axios.post("http://localhost:4000/Order/");
           setorders(res.data)
}
     catch (error) {
      alert("Error  during registration")
    }

}

return(
  <Container>
   <div>





   </div>




  </Container>
)
    
}
export default Order