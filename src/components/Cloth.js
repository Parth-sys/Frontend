import { useState,useEffect,useMemo } from 'react';
import React from 'react'
import { Container } from 'react-bootstrap';
import Card1 from './Card1';
import axios from 'axios';



function Cloth() {
    const [Category, setCategory] = useState()
    const [cloth, setcloth] = useState([]);

    useEffect(() => {
        data();
    }, [])

    const data = async () => {
        try {
            const res = await axios.get("http://localhost:4000/data/cloth")
            setcloth(res.data)
        } catch (error) {
            console.log(error)
        }

    }
  
    
        function filterlist(){
            if(!Category || Category==='select'){
                  return cloth;
            }
            return cloth.filter(C=>C.Category === Category);
           }
       
      
      
         var list=useMemo(filterlist,[Category,cloth]);
      console.log(list)
      
      console.log(Category)
    



    return (
        <Container>
            <div className="d-flex mt-3 justify-content-center">
                <div>
                    <h4>Category</h4>
                    <div style={{ maarginTop: "30px", width: "78%" }}>
                        <select name="select" className='form-select ' onChange={(e) => setCategory(e.target.value)} >
                            <option defaultValue="select">select</option>
                            <option value="Men">Men</option>
                            <option value="Woman">Woman</option>

                        </select>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">

            {    list?
                   list.map((p,index)=>{
                       return <div className="col-md-4 " key={index}>

                <div>
                    <Card1 cloth={p}></Card1>
                </div>
            </div>
              
            })
            : (
                 <div>
              <h2>  Not available</h2>
                
                </div>
            )
            }
         </div>                





        </Container>
    )
}
export default Cloth;