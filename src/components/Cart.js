import React  from "react";
import axios from "axios";




function Cart() {


 
  


  var  cartItems=localStorage.getItem('cartItems')
  
  var s= [JSON.parse(cartItems)] 
 console.log(s)

  


  const  handleorder=async(name,image,quantity,Price,varient)=>{
   try {
        const res=await axios.post("https://backend-h5ea.onrender.com/order/",{
        name,
         image,
         quantity,
         Price,
         varient
        })
        if(res.status===200){
          alert("order placed")
        }
        else{
          alert("server busy")
        }
   } catch (error) {
    console.log(error)
   }
}



  const dele = (name, index) => {
     var  cartItems=localStorage.getItem('cartItems')
    var s= JSON.parse(cartItems) 
    if(s.filter(d=>d.name === name)){
    localStorage.removeItem('cartItems')
  }
  }





return (
  <div className="container mt-4">
    <div style={{ backgroundColor: "cyan" }}>
      <h3 style={{ textAlign: "center" }}>Cart</h3>
    </div>
    <div className="row justify-content-center"  >
      <div className="col-md-8"   >

        {s === null ?
          <div className="d-flex w-100">

            <h5>Cart is Empty</h5>
          </div>
          :


          s.map((d, index) => {

            return <div  className="d-flex"  >

              <div className="w-100" key={index}>
                <img src={d.image} className="img-fluid" alt="img" style={{ height: '100px', width: '400px'}} ></img>

              </div>
              <div className="m-1 text-right w-100">

                <h6>{d.name}</h6>

              </div>


              <div className="m-1 text-right w-100">
                <h6>Quantity:{d.quantity}</h6>

              </div>

              <div className="m-1 text-right w-100 ">
                <h6>Price:{d.Price}Rs</h6>

              </div>

              <div className="m-1 text-right w-100">
                <h6>Size:{d.varient}</h6>

              </div>

              <div className="m-1">

                <button className="btn btn-secondary" style={{ float: "right" }} onClick={() => dele(d.name)} >delete</button>
              </div>


              <div className="m-1">

                <button className="btn btn-secondary" style={{ float: "right" }} onClick={()=>handleorder(d.name,`${d.image}`,d.quantity,d.varient,d.Price)} >order</button>
              </div>

            </div>


          })}



      </div>

    </div>
  </div>
)
}
export default Cart;