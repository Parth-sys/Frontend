import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'
import Select from 'react-select'
function Admin2() {

    const[name,setname]=useState(" ")
    const[varients,setvarients]=useState([])
     const[ Prices,setPrices]=useState([])
      const[Category,setCategory]=useState(" ")
      const[Brand,setBrand]=useState("  ")
      const[image,setimage]=useState(" ")
     const[description,setdescription]=useState(" ")
    
    
    
    
     useEffect(() => {

    }, [])

    



    const handelsubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/admin/cloth", {
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

    const handleChange = (varients) => {
        setvarients(varients || [])
      };


      const handle = (Prices) => {
        setPrices(Prices || [])
      };
    
    const options = [
   {  lable: "small", value:"small"},

     {lable:"xl" , value:"xl"},
     {lable:"xxl" , value:"xxl"}
    ]

    const op2=[
        {lable:"small" ,value :"250"},
        {lable :"xl", value:"350"},
        {lable:"xxl",value:"550"}
    ]


   

    return (

        <Container>
            <h4>Admin Page</h4>


            <div className='f' >


                <div className='row'>
                    <h4>Add cloth </h4>
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
export default Admin2;