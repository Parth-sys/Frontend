import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'
import Select from 'react-select'
function Admin() {

    const[name,setname]=useState(" ")
    const[varients,setvarients]=useState([])
     const[ Prices,setPrices]=useState([])
      const[Category,setCategory]=useState(" ")
      const[Brand,setBrand]=useState("  ")
      const[image,setimage]=useState(" ")
     const[description,setdescription]=useState(" ")
    
    
    
     useEffect(() => {

    }, [])

    



    

    const handleChange = (varients) => {
        setvarients(varients || [])
      };



      const handelsubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post(`https://backend-h5ea.onrender.com/admin/mobile/`, {
                name,
                varients,
                Prices,
                Category,
                Brand,
                image,
                description

            });

            console.log(res)
        } catch (error) {
            alert("Error  during sending data")
        }
    }



    



      const handle = (Prices) => {
        setPrices(Prices || [])
      };
    
    const options = [
   {  lable: " 512GB", value:"512GB"},

     {lable:"256GB" , value:"256GB"}
    ]

    const op2=[
        {lable:"512GB" ,value :"25000"},
        {lable :"256GB", value:"20000"}
    ]


   

    return (

        <Container>
            <h4>Admin Page</h4>


            <div className='f' >


                <div className='row'>
                    <h4>Add mobile </h4>
                    <Form onSubmit={handelsubmit} className='form'>

                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={name} onChange={(e) => { setname(e.target.value) }} required></Form.Control>
                        </Form.Group>

                      
                            <label>varients</label>

                            <Select
                                options={options}
                                onChange={handleChange}
                                value={varients}
                                isMulti
                            />


                     

                        <Form.Group>
                            <Form.Label>Prices</Form.Label>

                            <Select
                                options={op2}
                                onChange={handle}
                                value={Prices}
                                isMulti
                            />


                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="Category" value={Category} onChange={(e) => { setCategory(e.target.value) }} required></Form.Control>
                        </Form.Group>

                        <Form.Group>   
                             <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" name="Brand" value={Brand} onChange={(e) => { setBrand(e.target.value) }} required></Form.Control>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Image url</Form.Label>
                            <Form.Control type="url" name="Imageurl" value={image} onChange={(e) => { setimage(e.target.value) }} required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description About Product</Form.Label>
                            <Form.Control as="textarea" row={3} name="Description" value={description} onChange={(e) => { setdescription(e.target.value) }} required></Form.Control>
                        </Form.Group>


                        <Button variant='primary' type="submit">Add Product</Button>


                    </Form>

                </div>
            </div>



        </Container>
    )
}
export default Admin;