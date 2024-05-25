import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './login.css'

function Login() {

  const [email,setEmail]=useState(" ")
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const [comfirmPassword,setConfirmPassword]=useState("")
  

  const[valid,setValid]=useState(true)
  let validate=(e)=>{
    const {name,value}=e.target
// if(name==='email'){
//   setEmail(value);
// }
switch(true){
  case  name==="email":
    setEmail(value);
    break;
  case name==="username":
    setUserName(value);
    break;
    case name==="password":
    setPassword(value);
    break;
    case name==="confirm":
    setConfirmPassword(value)
    if(password===comfirmPassword){
      setValid(false);
    }
    break;
}
  }
  // ------------------------------------------------------------------------------------
  return (
  <>
    <div className='user-select-none'> 
 <Container>
  <Row>
    {/* form */}
     <Col className='d-flex flex-column align-items-center '>
     <h1  className=' mt-5'>Sign UP</h1>
     <Form>
       <div className='d-flex flex-column'>
         <input type="email" className='input p-3 ' placeholder='Enter Email'
        name='email' value={email||""} onChange={e=>validate(e)} />

         <input type="username" className='input p-3 mt-4' placeholder='Enter Username'
          name='username' value={userName||""} onChange={e=>validate(e)} />

         <input type="password" className='input p-3 mt-4' placeholder='Enter Password'
         name='password' value={password||""} onChange={e=>validate(e)}  />

         <input type="password" className='input p-3 mt-4' placeholder='Confirm Password'
         name='confirm' value={comfirmPassword||""} onChange={e=>validate(e)}  />
         <div className='btn btn-primary mt-4 input button'>Register</div>
       </div>
    </Form>
    <p className='mt-3' style={{color:"#c7c7c7"}}>or Continue with </p>
   <div className='d-flex flex-row '>
      <img src="https://img.icons8.com/?size=256&id=17949&format=png" alt="google" className='icon_image '/>
      <img src="https://img.icons8.com/?size=256&id=uLWV5A9vXIPu&format=png" alt="facebook" className='icon_image ms-2 me-2' />
      <img src="https://img.icons8.com/?size=256&id=95294&format=png" alt="apple" className='icon_image' />
   </div>
    </Col >  
     <Col>
       <div className='d-flex flex-column p-3 mt-5'>
       <span className="fs-2 fw-bolder"> Sign Up to</span> <span className='fs-4'>Lorem ipsum is simply</span>
      </div>
      <div className="d-flex">
        <div className="text fs-6 fw-bold ms-3"style={{width:"200px"}} >
         if already have an account <br/>you can 
         <span className=' fw-bold loginbtn'>Login here !</span>
        </div>
        <img src='https://cloudcall.com/wp-content/uploads/2023/07/Sample-14-edited-1.png' alt='image of  boy' className="sign_img" >
        </img>
      </div>
     </Col>
  </Row>
 </Container>
    </div>
  </>
  )
}

export default Login