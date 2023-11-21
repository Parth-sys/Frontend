import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Form, Button } from 'react-bootstrap'

function Admin() {

    useEffect(() => {

    }, [])





    const [formdata, setformdata] = useState({
        name:"",
        varients:[],
        Prices:[],
        Category:"",
        Brand:"",
        image:"",
        description:""

    })

    const   handelselect=(e)=>{
        let target=e.target;
        let name=e.name;
        let value=Array.from(target.selectedOptions, option => option.value);
        setformdata({
          [name]: value
        });
      }


    const handelsubmit = async (e) => {

        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/admin/mobile",{
                formdata

            });

            console.log(res)
        } catch (error) {
            alert("Error  during sending data")
        }
    }


console.log(formdata)

    return (

        <Container>
            <h4>Admin Page</h4>








            <div className='f' >


                <div className='row'>
                    <h4>Add mobile </h4>
                    <Form onSubmit={handelsubmit} className='form'>

                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={formdata.name} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
                        </Form.Group>
                        <Form.Group>
                         
                        <select id="select"  multiple={true}  name="selectedOptions"        onChange={handelselect }>
                           <option value={formdata.varients}>512</option>
                            <option value={formdata.varients}>256</option>
                         
                         </select>
                        </Form.Group>



                        <Form.Group>
                            <Form.Label>Prices</Form.Label>
                            <Form.Control type="text" name="Prices" value={formdata.Prices} onChange={(e) => { setformdata(e.target.value) }} aria-multiselectable={true} required ></Form.Control>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" name="Category" value={formdata.Category} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" name="Brand" value={formdata.Brand} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
                        </Form.Group>


                        <Form.Group>
                            <Form.Label>Image url</Form.Label>
                            <Form.Control type="url" name="Imageurl" value={formdata.image} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description About Product</Form.Label>
                            <Form.Control as="textarea" row={3} name="Description" value={formdata.description} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
                        </Form.Group>


                        <Button variant='primary' type="submit">Add Product</Button>


                    </Form>

                </div>
            </div>



        </Container>
    )
}
export default Admin;