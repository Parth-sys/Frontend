import React,{useEffect, useState,useMemo} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Card from './Card'


function Mobile(){
    const [Category, setCategory] = useState()
    const [mobile,setmobile]=useState([]);

useEffect(()=>{
    data();
},[])


    function filterlist(){
        if(!Category || Category==='select'){
              return mobile;
        }
        return mobile.filter(C=>C.Brand=== Category);
       }
   
  
  
       var list=useMemo(filterlist,[Category,mobile]);
  
  
  

    const data=async()=>{
        try {
            const res=await axios.get("https://backend-h5ea.onrender.com/data/mobile")
         
            setmobile(res.data)
        } catch (error) {
            console.log(error)
        }

    }




    return(
        <Container>
         <div className="d-flex mt-3 justify-content-center">
          <div>
            <h4>Brands</h4>
            <div style={{ maarginTop: "30px", width: "71%" }}>
                        <select name="select" className='form-select ' onChange={(e) => setCategory(e.target.value)} >
                              <option defaultValue="select">select</option>
                              <option value="MOTOROLA">MOTOROLA</option>
                              <option value="samsung">Samsung</option>
                             
                        </select>
                  </div>
                           </div>  
         </div>
           <div className="row justify-content-center">

               {
                   list.map((p,index)=>{
                       return <div className="col-md-4 " key={index}>
                <div>

                    <Card data={p}></Card>
                </div>
                </div>
              })
              
            }
            </div>
      


  



        </Container>
    )
}
export default Mobile