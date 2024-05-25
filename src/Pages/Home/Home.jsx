import React, { useState } from 'react'
import Navigation from './Navigation'
import { Carousel, Col, Container, Row } from 'react-bootstrap'


function Home() {
  

  return (
    <div className='home'>
      <Navigation></Navigation>
      <div  id='products'>
        <Container>
          <Row>
            {/* --------------------------------------------------------------------------------------------- */}
            <Col>
            <p className='fw-bolder fs-2 text-justify text-light'>This is the time to turn yourself into a real man</p>
            <p className='fw-bold fs-8 sub_para'>Handpickked collection of <span style={{color:"#00b207"}}>Premium</span> time keeper for all your purposees and ages</p>
            <p className='mt-2 fw-bold text-light'>Featured Collectables</p>
             {/* ------------------------------------------------------------------------------------ */}
         
              <div className='d-flex flex-direction-row'>
                
                  <div className='card'>
                  <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'70px'}} alt="watch image"  className='img-fluid mt-1'/>
                  <p className='mt-1 fw-medium'>Zoro mindsweep G</p>
                  <p className='fw-bold' style={{color:"#c7c7c7"}}>$200</p>
                  <div className="btn btn-success">Buy Now</div>
                  </div>
                  <div className='card ms-2'>
                  <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'70px'}} alt="watch image"  className='img-fluid mt-1'/>
                  <p className='mt-1 fw-medium'>Zoro mindsweep G</p>
                  <p className='fw-bold' style={{color:"#c7c7c7"}}>$200</p>
                  <div className="btn btn-success">Buy Now</div>
                  </div>
                  <div className='card ms-2'>
                  <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'70px'}} alt="watch image"  className='img-fluid mt-1'/>
                  <p className='mt-1 fw-medium'>Zoro mindsweep G</p>
                  <p className='fw-bold' style={{color:"#c7c7c7"}}>$200</p>
                  <div className="btn btn-success">Buy Now</div>
                  </div>
                
              </div>
            </Col>
            {/* --------------------------------------------------------------------------------------------- */}
            <Col className='d-flex flex-column align-items-center'>
            <Row>
              <div className="feature mt-3">
                <div className='feature_name d-flex flex-column justify-content-center mt-2'>
                  <p className='text-light fw-medium '>Bremont star <br />
                  <span className='fw-medium' style={{color:"#c7c7c7"}}>$ 147</span></p>
                </div>
                <div className="btn">Buy Now</div>
              </div>
            </Row>
            {/* ----------------------------carousal------------------------------------------------------------- */}
            <Row className='mt-4'>
            <Carousel className=' text-center mt-5' controls={false}>
      <Carousel.Item interval={1000}>
      <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'200px'}} alt="watch image"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'200px'}} alt="watch image"/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://pngimg.com/uploads/watches/watches_PNG9880.png" style={{width:'200px'}} alt="watch image"/>
      </Carousel.Item>
     
    </Carousel>
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home