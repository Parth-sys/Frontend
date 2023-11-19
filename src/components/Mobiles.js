import React,{useEffect, useState} from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

function Mobile(){
    const [Category, setCategory] = useState()
    const [mobile,setmobile]=useState([]);

useEffect(()=>{
    data();
},[])

/*
    function filterlist(){
        if(!Category || Category==='select'){
              return bike;
        }
        return bike.filter(C=>C.Category === Category);
       }
   
  
  
       var filist=useMemo(filterlist,[Category,bike]);
  
  console.log(data)
  console.log(Category)
*/

    const data=async()=>{
        try {
            const res=await axios.get("http://localhost:4000/data/mobile")
            console.log(res);
            setmobile(res)
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
                              <option value="Samsung">Samsung</option>
                             
                        </select>
                  </div>
            </div>  
           
      
      


  



         </div>
        </Container>
    )
}
export default Mobile