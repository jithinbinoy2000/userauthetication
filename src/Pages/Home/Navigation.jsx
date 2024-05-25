import React from 'react'
import './home.css'
function Navigation() {
  return (
    <>
    <div className='d-flex justify-content-between'>
       <div className="brand_name list fw-bold fs-3 ms-4">
             <a href='#'>D'Watch</a>
       </div>
        <ul className='list d-flex justify-content-evenly fw-medium  align-items-center'>
            <li className='ms-2' ><a href='#' className='list_item'>Products</a></li>
            <li className='ms-5'><a href='#' className='list_item'>About</a></li>
            <li className='ms-5'><a href='#' className='list_item'>Contact</a> </li>
            <li className='ms-5 me-5'><a href='#' className='list_item'>
            <i class="fa-solid fa-cart-shopping" style={{color:"#8cf207"}} ></i></a></li>
        </ul>
    </div>
    </>
   
  )
}

export default Navigation