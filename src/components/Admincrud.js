import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import axios from "axios"
import {Form} from 'react-bootstrap'
import Select from 'react-select';

function AdminCrud(){

const[data,setdata]=useState([])


useEffect(()=>{
Mob()

},[])

const [show,setshow]=useState(false)


const[name1,setname1]=useState(" ")
    const[varients1,setvarients1]=useState([])
     const[ Prices1,setPrices1]=useState([])
      const[Category1,setCategory1]=useState(" ")
      const[Brand1,setBrand1]=useState("  ")
      const[image1,setimage1]=useState(" ")
     const[description1,setdescription1]=useState(" ")
    const[name,setname]=useState("")



const handleshow=()=>{
      
      
    setshow(true)
  };
  const handleClose=()=>(setshow(false))
 

  const handleChange = (varients) => {
    setvarients1(varients || [])
  };


  const handle = (Prices) => {
    setPrices1(Prices || [])
  };

const options = [
{  lable: " 512GB", value:"512GB"},

 {lable:"256GB" , value:"256GB"}
]

const op2=[
    {lable:"512GB" ,value :"25000"},
    {lable :"256GB", value:"20000"}
]




    const Mob=async()=>{
        try {
            const res=await axios.get("http://localhost:4000/data/mobile")
         
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }

    }



    const dele=async()=>{
        try {
            const res=await axios.get(`http://localhost:4000/admin/mobile/${name}`)
         
            setdata(res.data)
        } catch (error) {
            console.log(error)
        }

    }



    const handelsubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/admin/mobile/${name}`, {
                name1,
                varients1,
                Prices1,
                Category1,
                Brand1,
                image1,
                description1

            });

            console.log(res)
        } catch (error) {
            alert("Error  during sending data")
        }
    }



    




    const edit1=(name)=>{
        setname(name)
       }








    return(
       
    <div className="row justify-content-center m-1" style={{ overFlow:"auto" }}>
    <div>
   
         <div className="col-md-8">
         <table className="table table-responsive ">
             
       <thead>    
 <tr>
   <th scope="col">name</th>
   <th scope="col">varients</th>
   <th scope="col">Prices</th>
   <th scope="col">Category</th>
   <th scope="col">Brand</th>
   <th scope ="col">Image</th>

 </tr>
         </thead>  

    <tbody> 
   {data.map((r,index)=>(
 <tr key={index} onClick={handleshow} >
   <td>{r.name}</td>
   <td>{r.varients}</td>
   <td>{r.Prices}</td>
   <td>{r.image}</td>
   <td>{r.Category}</td>
   <td>{r.Brand}</td>
   <button className=" btn-primary btn-default " style={{color:"dodgerblue"}} onClick={()=>{edit1(`${r.name}`)}}>Edit</button>
   <button className=" btn-danger btn-default" style={{color:"red" ,margin:"1rem"}} onClick={()=>dele(`${r.email}`)}>delete</button>    

 </tr>





))}



</tbody>

             
   
         </table>
         </div>
         

         {data.filter(c=>c.name === name).map((t)=>(


<Modal show={show} >
 <Modal.Header closeButton onClick={handleClose}>
     <Modal.Title>Update Mob</Modal.Title>
 </Modal.Header>

 <Modal.Body>
  <div >

  <div className='f' >


<div className='row'>
    <h4>Add cloth </h4>
    <Form onSubmit={handelsubmit} className='form'>

        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={name} onChange={(e) => { setname1(e.target.value) }} required></Form.Control>
        </Form.Group>

      
            <label>varients</label>

            <Select
                options={options}
                onChange={handleChange}
                value={varients1}
                isMulti
            />


     

        <Form.Group>
            <Form.Label>Prices</Form.Label>

            <Select
                options={op2}
                onChange={handle}
                value={Prices1}
                isMulti
            />


        </Form.Group>


        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="Category" value={Category1} onChange={(e) => { setCategory1(e.target.value) }} required></Form.Control>
        </Form.Group>

        <Form.Group>   
             <Form.Label>Brand</Form.Label>
            <Form.Control type="text" name="Brand" value={Brand1} onChange={(e) => { setBrand1(e.target.value) }} required></Form.Control>
        </Form.Group>


        <Form.Group>
            <Form.Label>Image url</Form.Label>
            <Form.Control type="url" name="Imageurl" value={image1} onChange={(e) => { setimage1(e.target.value) }} required></Form.Control>
        </Form.Group>

        <Form.Group>
            <Form.Label>Description About Product</Form.Label>
            <Form.Control as="textarea" row={3} name="Description" value={description1} onChange={(e) => { setdescription1(e.target.value) }} required></Form.Control>
        </Form.Group>
1

       


    </Form>

</div>
 
  
  </div>
</div>  
 </Modal.Body>

 <Modal.Footer>
     <button  className="btn"  onClick={handelsubmit} >update</button>
    
 </Modal.Footer>
</Modal>
))}

        </div>






        
       

    </div>
    )    
}

export default AdminCrud