import React from 'react';
function Carousel1() {
    
    
    return (
        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" width="300px" height="200px" >

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" width="400px">
          <div className="carousel-item active" height="300px" width="200px">
            <img src="https://media.centrepointstores.com/i/centrepoint/SP_Offers_Block06MAR18.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First</h5>
              <p> first slide.</p>
            </div>
          </div>
          <div className="carousel-item" height="300px" width="200px">
            <img src="https://img.freepik.com/free-vector/abstract-sales-landing-page-with-photo_52683-28047.jpg?w=740&t=st=1700293224~exp=1700293824~hmac=774072bb17ae0afb733142445ea531a8de707eb7b402b7a2d60f9acb42b53761" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second </h5>
              <p>second slide.</p>
            </div>
          </div>
          <div className="carousel-item" height="300px">
            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/787363/1617369550601.jpg?imwidth=1600&impolicy=hq" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third </h5>
              <p> third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
              
  );

};

export default Carousel1;