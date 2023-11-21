import React  from "react";
import {Container} from 'react-bootstrap';
import Navbar1 from "./Nav";
import Carousel1 from "./Carousels";
import Products from "./products";
import Footer from './Footer'
function Home(){
    return(

        <Container>  
       <Navbar1></Navbar1>
       
       <Carousel1></Carousel1>

        <Products></Products>
        <div>
        <Footer></Footer>      
      </div> 

       </Container>
        )


}

export default Home