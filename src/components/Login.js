import React,{useState} from 'react';
import {Form,Container,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'

const Login=()=>{


const[formdata,setformdata]=useState({
  
    email:"",
    password:"",

});

{/*

  const handlechange = (e) => {
    //const {name,value}=e.target
    
    // setformdata({...formdata,[name]:value})
    setformdata({e.target.value})
  }
*/}

  const handelsubmit=async(e)=>{
e.preventDefault();
const res=await axios.post("http://localhost:4000/login/login",{
  email:formdata.email,
  password:formdata.password
})
 console.log(res)

}

    return(
           <Container>
            <h4>Login</h4>
            <Form onSubmit={handelsubmit}>
           
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formdata.email} onChange={(e)=>setformdata(e.target.value)} required></Form.Control>
                </Form.Group> 
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formdata.password} onChange={(e)=>setformdata(e.target.value)} required></Form.Control>
                </Form.Group> 
                <Button variant='primary' type="submit">Register</Button>
                 <p>Don't have an account?<Link to="/Signup">signup</Link> </p>
            </Form>
           </Container>
    )
}

export  default Login;