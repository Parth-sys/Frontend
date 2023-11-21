import { Container } from 'react-bootstrap';
import React from 'react';


function Products() {


    return (
        <Container>

            <div className='d-flex mt-3 mb-3 justify-content-evenly shadow-lg'>

                <div className='m-1'>
 
                    <h4>Mobiles</h4>
                    <div >
                     <a href="/mobiles">   <img src="https://www.samsungmobilepress.com/file/1C69605B491DFADD70995BCBF81AD75536A41C03DD57049A03AB21676263ECFDE859034AE66B2AAE472E2E25C3E273DF2D9A74D715837FF870334E0C732BEC5FF74CA486B1880BC6DF483EF69A4F9B15A3B6350264049A1E02485017868810580EF69BC363683A4ADDDFC42FEA75B51F765BAAACF2094677A34E29A49321DAD4D30663247C6FB9183751E37FA25265C7213965B541588A1A8A13571B9EF7706B" alt="Mobiles" height="80px"></img></a>
                    </div>
                </div>

                <div className='m-1' >

                    <h4>Grocery</h4>
                    <div>
                      <a href="/">  <img src="https://freepngimg.com/thumb/grocery/41619-7-groceries-free-download-image.png" alt="GROCERY" height="80px"></img></a>
                    </div>
                </div>


                <div className='m-1'>

                    <h4>Fashion</h4>
                    <div>
                      <a href="/cloth">  <img src="https://freepngimg.com/thumb/dress%20shirt/4-black-dress-shirt-png-image.png" alt="fashion" height="90px"></img></a>
                    </div>
                </div>



            </div>

        </Container>
    )
}
 export default Products;