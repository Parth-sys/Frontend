
import React, { useEffect, useState } from "react"

import { Container } from "react-bootstrap";
import axios from 'axios';

function Order(){

useEffect(()=>{

  handelsubmit()
},[])


const [orders,setorders]=useState([]);




 const handelsubmit=async()=>{
    
    try {
      const res= await axios.get("http://localhost:4000/Order/");
      console.log(res)   
      setorders(res.data)
}
     catch (error) {
      alert("Error  during registration")
    }

}



return(
  <Container>


<div className="row justify-content-center">

   <h3>Orders</h3>
   <div>

     {  
        orders.length===0?
        <div className="d-flex w-100 shadow-lg">

        <h5>No History yet </h5>
      </div>
     : 
     orders.map((p,index)=>{
       return <div className="d-flex flex-column shadow-lg m-3" key={index}>
        <div className="mr-1">
          <h3>Product:</h3>
        <hr></hr>
          <h4>{p.name}</h4>
        </div>
       
       
        <div className="ml-2">
          <hr></hr>
          <h3>Date:</h3>
          <hr></hr>
        <p>{p.updatedAt.substring(0,10).split("-").reverse().join("-")}</p>

        </div>

      </div>
   
   
  })
  
  
  
}



   </div>



</div>

  </Container>
)
    
}
export default Order