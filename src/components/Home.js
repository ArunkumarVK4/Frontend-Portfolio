import React from 'react'
import {AiOutlineLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
export default function Home() {
  return (
    <div >
      
      <div className="container" name="Home">
        <div className="row">
          
          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto mt-5">
          <h4 className="fw-bold text-light mt-5 ">Hi 👋 , I ' m </h4><h2 className='name typewriter' >Arunkumar <br /></h2>
          <br />
          <h5 className='mt-3 text-start get '>
            A passionate <strong className='signature1'>Front End Developer </strong> in (MERN)
            having an experience of building a Responsive Web applications 
            with <strong>JavaScript / React.js / Node.js / Express.js </strong>
            and also some other js libraries and framework.
          </h5><br />
          <div className='d-flex gap-3 '>
          <a target="_blank" href='https://www.linkedin.com/in/arunkumar-vk-a36080257/'><AiOutlineLinkedin  size={50}className='text-primary hand element'/></a>
          <a target="_blank" href='https://github.com/ArunkumarVK4'><BsGithub size={50} className='text-secondary hand element'/></a>
          
          </div>
          <div className='mt-3'>
          <a target="_blank" href="https://drive.google.com/file/d/1-SZHI6TbLAr-uGE_3Q-htMftBJ70KNX3/view?usp=share_link" className='btn btn-danger fw-bold  hand resume'>Resume </a>
          </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-3 mx-auto mb-5">
              {/* <img className='img-fluid ' src="https://c.tenor.com/2uyENRmiUt0AAAAC/coding.gif" alt="" /> */}
              <img className='img-fluid mt-5 rounded-3 mb-5' src="https://thumbs.gfycat.com/ExemplaryFairFeline-max-1mb.gif" alt="" />
          </div>
        </div>
      </div>
      <br />
    </div>
    
  );
}

