
import React, { useState } from "react"
import Toast from "./Toast";
import { createContext } from "react";
import { toast } from 'react-toastify'


function Card({ data }) {

    const [varient, setvarient] = useState('512GB');
    const [quantity, setquantity] = useState(1);
    const [cartItems, setcartItems] = useState([])

     

    const Cartdata=createContext();

    const addtocart = (name, image, varient, quantity, Price) => {

        const item = {
            name: name,
            image: image,
            varient: varient,
            quantity: quantity,
            Price: Price
        }


      

  setcartItems(item)

        /*  
          var a=
            [  {name:name,image:image,varient:varient,quantity:quantity,Price:Price}
            ];
           for(var i=0;i<a.length;i++){
              cartItems.push(a[i]);
          } 
  */
        toast("added to cart", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }






    return (
        <Cartdata.Provider    value={{cartItems}}>
        <div className="container" >

            <div className=" shadow-lg p-1 mb-5 bg-body rounded m-5"   >


                <div>
                    <h4>{data.name}</h4>
                    <img src={data.image} alt="name" className="img-fluid" style={{ height: '200px', width: '250px' }}></img>
                </div>

                <div className="d-flex">

                    <div className="w-100 m-1">
                        <p>Varients</p>
                        <select className="form-control" value={varient} onChange={(e) => setvarient(e.target.value)} >
                            {data.varients.map((option) => {
                                return <option value={option}>{option}</option>
                            })}
                        </select>

                    </div>



                    <div className="w-100 m-1">
                        <p>Quantity</p>
                        <select className="form-control" value={quantity} onChange={(e) => setquantity(e.target.value)}>
                            {[...Array(10).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                        </select>
                    </div>


                </div>

                <div className="d-flex">

                    <div className="m-1 ">

                        <h4> Price:{data.Prices[0][varient] * quantity}Rs/- </h4>
                    </div>

                    <div className="m-1">
                        <button className="btn btn-primary" onClick={() => addtocart(data.name, data.image, varient, quantity, `${data.Prices[0][varient] * quantity}`)} >Add to cart</button>
                    </div>


                </div>

            </div>
            <Toast></Toast>
        </div>
        </Cartdata.Provider>
    )
}
export default Card;

