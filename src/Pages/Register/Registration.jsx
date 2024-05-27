import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Registration.css'
import { Link, useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../../Services/allAPI'



function Registration() {
  const [userData,setUserData]=useState({
    username:"",email:"",password:""
  })
  const [validData,setValidData] = useState(true)
  const [validEmail,setValidEmail] = useState(true)
  const[validPassword,setValidPassword]= useState(true)
 const navigate = useNavigate();
  
  //validate
  const handleRegister=async(e)=>{
   e.preventDefault();
   const{username,email,password}=userData;
   if(!username || !email || !password){
    setValidData(false)
    toast.warning("Please fill the form completely")
   }
   else{
    setValidData(true)
    //email validation
    if(email.match("[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}")){
      setValidEmail(true)
      try{
        const response =await registerAPI(userData)
        console.log(response.status);
        if(response.status===200){
          toast.success(`${response.data.username} has succesfully registered`)
         setUserData({username:'',email:'',password:''})
         setTimeout(() => {
          navigate('/login')
         }, 2000);
       
        }
        else {
        //  alert("exsisting user please login")
          toast.info("exsisting user please login ")
         setTimeout(() => {
          navigate("/login");
         },3000); 
        }
      }catch(err){
        console.log(err);
      }
    
    }else{
      setValidEmail(false)
    } 
   }
  }

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
        name='email' value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} />

         <input type="username" className='input p-3 mt-4' placeholder='Enter Username'
          name='username' value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />

         <input type="password" className='input p-3 mt-4' placeholder='Enter Password'
         name='password' value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}  />

         <input type="password" className='input p-3 mt-4' placeholder='Confirm Password'
         name='confirm' />
         {!validData ? <div className='text-danger mt-2'>Please fill the form Completely </div>:null}
         {!validPassword ? <div className='text-danger mt-2'>Password doesn't Match </div>:null}
         {!validEmail ? <div className='text-danger mt-2'>Invalid Email </div>:null}
         <div className='btn btn-primary mt-2 input button' onClick={(e)=>{handleRegister(e)}}>Register</div>
       </div>
    </Form>
    <p className='mt-3' style={{color:"#c7c7c7"}}>or Continue with </p>
   <div className='d-flex flex-row icons '>
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
         <Link to={'/login'}><span className='fw-bold loginbtn ms-2'>login here !</span></Link>
        </div>
        <img src='https://cloudcall.com/wp-content/uploads/2023/07/Sample-14-edited-1.png' alt='image of  boy' className="sign_img" >
        </img>
      </div>
      
     </Col>
  </Row>
 </Container>

    </div>
    <div>
    <ToastContainer autoClose={2000} />
    </div>
  </>
  )
}

export default Registration