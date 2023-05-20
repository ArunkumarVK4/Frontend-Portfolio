import React from 'react'
import img1 from "../pics/img.png"
import {FaLaptopCode} from 'react-icons/fa';
import {RiLiveFill} from "react-icons/ri"

export default function Project() {
  return (
    <div>

<div className="container" name="project">
        <div className="row">
        <h1 className='text-center fw-bold text-warning display-4 mt-5'> Project </h1>
          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto mt-5">
         
          <br />
          <h5 className='mt-3 text-start get '>
          Responsive E-commecre Website both front-end and back-end Api connectivity
          with Stripe Payment gateway , Order Status, Admin Control
          </h5><br />
          
          <div className='mt-3'>
          <a target="_blank" href='https://jolly-jalebi-5878c4.netlify.app/#' className='btn btn-info hand fw-bold mx-5'><h3><RiLiveFill/> DEMO </h3></a>

        <a target="_blank" href='https://github.com/ArunkumarVK4/react-cart' className='btn btn-info  hand fw-bold mx-auto'> <h3><FaLaptopCode/> CODE</h3></a>
          </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-3 mx-auto mb-5">
              <img className='img-fluid mt-5 rounded-3 mb-5 border border-5 hand' src={img1} alt="" />
          </div>
        </div>
      </div>
      <br />

    </div>
  )
}
