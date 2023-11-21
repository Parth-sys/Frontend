import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



const Signup = () => {




  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",

  });

  //console.log(formdata)

  const handelsubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/signup/verify",{ formdata});

      console.log(res.data)

      if (res.data === true) {
        alert("Registration link is sent to Email Id")
      }
      else if (res.data === false) {
        alert("User alredy exists")
      }
    } catch (error) {
      alert("Error  during registration")
    }
  }

  return (
    <div className='f'>
      <div className='row'>

        <h4>Signup</h4>

        <Form onSubmit={handelsubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={formdata.name} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formdata.email} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formdata.password} onChange={(e) => { setformdata(e.target.value) }} required></Form.Control>
          </Form.Group>
          <Button variant='primary' type="submit">Register</Button>
          <p>Alredy have an account?<Link to="/login">Login</Link> </p>
        </Form>

      </div>
    </div>
  )
}

export default Signup;