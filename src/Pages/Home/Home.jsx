import React from 'react'
import Navigation from './Navigation'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <div className='home'>
      <Navigation></Navigation>
      <div>
        <Container>
          <Row>
            {/* --------------------------------------------------------------------------------------------- */}
            <Col>
            <p className='fw-bolder fs-2 text-justify text-light'>This is the time to turn yourself into a real man</p>
            <p className='fw-bold fs-8 sub_para'>Handpickked collection of <span style={{color:"#00b207"}}>Premium</span> time keeper for all your purposees and ages</p>
            </Col>
            {/* --------------------------------------------------------------------------------------------- */}
            <Col>
            <p className='fs-1'>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p></Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Home