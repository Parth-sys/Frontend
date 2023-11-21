import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar1() {

  const[isLogIN,setisLogIN]=useState(false);

  const navigate=useNavigate();

useEffect(()=>{
Check()
},[])



const Logout = () => {
        
        
        
  if (isLogIN) {
    localStorage.clear("userinfo");
    
    navigate('/login')
  }
  else {
    alert("Please LogIn")
  }
}


  const Check=()=>{
    var token=localStorage.getItem("userinfo")
    
if(token){
 setisLogIN(true)
}
else {

setisLogIN(false)
}
}

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Ecom</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {isLogIN?
            <button classname="btn btn-primary" onClick={Logout}>Logout</button>
          :
          <Nav.Link href="/login">login</Nav.Link>
          ?
          <Nav.Link href="/signup">Signup</Nav.Link>
          :
          <></>
          }
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mobiles">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="/cloth">
                Clothes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Grocery
              </NavDropdown.Item>
            </NavDropdown>

            {isLogIN?
            <Nav.Link href="/orders" >
              orders
            </Nav.Link>
            :

            <Nav.Link href="/orders" disabled>
            orders
          </Nav.Link>
        }
          </Nav>
           <Form>
          <a href='/cart'><Button variant="outline-success">Cart</Button></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;