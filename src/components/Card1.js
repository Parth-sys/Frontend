
import React, { useState } from "react"
import Toast from "./Toast";
import { toast } from 'react-toastify'


function Card1({ cloth }) {

    const [varient, setvarient] = useState('small');
    const [quantity, setquantity] = useState(1);
    const [cartItems, setcartItems] = useState([])





    const addtocart = (name, image, varient, quantity, Price) => {

        const item = {
            name: name,
            image: image,
            varient: varient,
            quantity: quantity,
            Price: Price
        }

        const it = cartItems.push(item);

console.log(it)
        /*  
          var a=
            [  {name:name,image:image,varient:varient,quantity:quantity,Price:Price}
            ];
           for(var i=0;i<a.length;i++){
              cartItems.push(a[i]);
          } 
          setcartItems(cartItems)
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
    }






    return (

        <div className="container" >

            <div className=" shadow-lg p-1 mb-5 bg-body rounded m-5"   >


                <div>
                    <h4>{cloth.name}</h4>
                    <img src={cloth.image} alt="name" className="img-fluid" style={{ height: '200px', width: '250px' }}></img>
                </div>

                <div className="d-flex">

                    <div className="w-100 m-1">
                        <p>Varients</p>
                        <select className="form-control" value={varient} onChange={(e) => setvarient(e.target.value)} >
                            {cloth.varients.map((option) => {
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

                    <div className="  mr-1 p-1">

                        <h4> Price:{cloth.Prices[0][varient] * quantity}Rs/- </h4>
                    </div>

                    <div className=" ml-1  ">
                        <button className="btn btn-primary" onClick={() => addtocart(cloth.name, cloth.image, varient, quantity, `${cloth.Prices[0][varient] * quantity}`)} >Add to cart</button>
                    </div>


                </div>

            </div>
            <Toast></Toast>
        </div>
    )
}
export default Card1;