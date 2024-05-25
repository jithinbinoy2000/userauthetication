import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Registration.css'



function Registration() {
  return (
    <>
    <div className='user-select-none'> 
 <Container>
  <Row> 
     <Col>
       <div className='d-flex flex-column p-3 mt-4'>
       <span className="fs-2 fw-bolder"> Sign In to</span> <span className='fs-4'>Lorem ipsum is simply</span>
      </div>
      <div className="d-flex">
        <div className="text fs-6 fw-bold ms-3"style={{width:"200px"}} >
         If you don't have an acccount register <br/>you can 
         <span className=' fw-bold loginbtn ms-3'>Register here!</span>
        </div>
        <img src='https://cloudcall.com/wp-content/uploads/2023/07/Sample-14-edited-1.png' alt='image of  boy' className="sign_img" >
        </img>
      </div>
     </Col>
     {/* ------------------------------------------------------------------------------------ */}
      {/* form */}
      <Col className='d-flex flex-column align-items-center '>
     <h1  className='fs-2 fw-bolder mt-5'>Sign In</h1>
     <Form>
       <div className='d-flex flex-column'>
         <input type="email" className='input p-3 ' placeholder='Enter Email' />
         <input type="password" className='input p-3 mt-4' placeholder='Enter Password' />
         <a className=" text-end mt-3">Forgot Password ?</a>
           <div className='btn btn-primary mt-4 input button'>LogIn </div>
       </div>
    </Form>
    <p className='mt-3' style={{color:"#c7c7c7"}}>or Continue with </p>
   <div className='d-flex flex-row '>
      <img src="https://img.icons8.com/?size=256&id=17949&format=png" alt="google" className='icon_image'/>
      <img src="https://img.icons8.com/?size=256&id=uLWV5A9vXIPu&format=png" alt="facebook" className='icon_image ms-2 me-2' />
      <img src="https://img.icons8.com/?size=256&id=95294&format=png" alt="apple" className='icon_image' />
   </div>
    </Col >
  </Row>
 </Container>
    </div>
    </>
  )
}

export default Registration