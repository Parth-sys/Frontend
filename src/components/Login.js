import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
import '../components/styles/Login.css'

const Login=()=>{

const navigate=useNavigate();

const[email,setemail]=useState("");
const [password,setpassword]=useState("")



console.log(password)

  const handelsubmit=async(e)=>{
    e.preventDefault();
    try {
      const res= await axios.post("http://localhost:4000/login/",{
        email,
        password
      
      });

      if ( res.data==='Invalid email or password') {
        alert("Invalid email or password")
        
     }
  else if(res.data ==='server busy'){
    alert("verify ur email id")
  }
else if(res?.status){
    localStorage.setItem("userinfo",res.data)
    localStorage.setItem('userinfo',JSON.stringify(res.data))
          navigate("/")
}
    } catch (error) {
      alert("Error  during registration")
    }

}

    return(
           <div className='f' >
           

              <div className='row'>
            <h4>Login</h4>
            <Form onSubmit={handelsubmit}  className='form'>
           
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required></Form.Control>
                </Form.Group> 
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required></Form.Control>
                </Form.Group> 
                <Button variant='primary' type="submit">Register</Button>
                 <p>Don't have an account?<Link to="/Signup">signup</Link> </p>
            </Form>
        
              </div>
           </div>
    )
}

export  default Login;