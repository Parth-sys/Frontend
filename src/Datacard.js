import React ,{createContext, useState}from "react";
import { useContext } from "react";
//import { useNavigate} from "react-router-dom";
import {toast} from 'react-toastify'

//import { Mensdata } from "./Components/Mendata";
import {Toast } from './components/Toast'


const Cartdata=createContext();

function Datacard({data}){
    
    const [varient, setvarient] = useState('small');
    const [quantity, setquantity] = useState(1);
    const [cartItems,setcartItems]=useState([])
    
    //const navigate=useNavigate()
    
    // console.log(data)
    
    
    

    
    
    
    
    const addtocart=( name,image,varient,quantity,Price)=>{
 
        const item={
            name:name,
            image:image,
            varient:varient,
            quantity:quantity,
            Price:Price
        }

     const it=cartItems.push(item);
     console.log(cartItems)
     setcartItems(it)

      /*  
        var a=
          [  {name:name,image:image,varient:varient,quantity:quantity,Price:Price}
          ];
         for(var i=0;i<a.length;i++){
            cartItems.push(a[i]);
        } 
        setcartItems(cartItems)
*/
        toast("added to cart",{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
 pauseOnHover: false,
 draggable: true,
progress: undefined,
theme: "dark"
});

        
localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

    
    
    
    
    
    
    return(
        
        <Cartdata.Provider    value={{cartItems}}>

        <div className="container" > 

        <div className=" shadow-lg p-1 mb-5 bg-body rounded m-5"   >
            
             
              <div>
            <h4>{data.name}</h4>
            <img src={data.image} alt="name" className="img-fluid" style={{ height: '200px', width: '200px' }}></img>
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

                <div className="m-1 w-100">

                    <h4> Price:{data.Prices[0][varient] * quantity}Rs/- </h4>
                </div>

                <div className="m-1 w-100">
                    <button className="btn btn-danger" onClick={()=>addtocart(data.name,data.image,varient,quantity,`${data.Prices[0][varient]*quantity}`)} >Add to cart</button>
                </div>


            </div>

         </div>
         <Toast></Toast>
         </div>
     </Cartdata.Provider>
    )
}
export default Datacard;
export {Cartdata}