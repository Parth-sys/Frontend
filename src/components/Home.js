import React  from "react";
import {Container} from 'react-bootstrap';
import Navbar1 from "./Nav";
import Carousel1 from "./Carousels";
import Products from "./products";
function Home(){
    return(

        <Container>  
       <Navbar1></Navbar1>
       
       <Carousel1></Carousel1>

        <Products></Products>
       </Container>
        )


}

export default Home