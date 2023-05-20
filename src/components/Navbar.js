import React from 'react'
import { Link } from 'react-scroll'

export default function Navbar() {
  return (
    <div>
      
      <div className='container'>
      <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand signature1 rose hand fw-bold " name="home">V K</a>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav d-flex gap-4 ms-auto fw-bold text-center " >
        <li className="nav-item">
        
          <a className="nav-link rose hand" aria-current="page"  ><Link activeclassName="active" to="Home"  smooth={true}  duration={500}>
        Home
        </Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link rose hand">
          <Link activeclassName="active" to="skill"  smooth={true}  duration={500}>
        Skill
        </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link rose hand" >
          <Link activeclassName="active" to="project"  smooth={true}  duration={500}>
        Project
        </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link rose hand">
          <Link activeclassName="active" to="education"  smooth={true}  duration={500}>
        Education
        </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link rose hand" >
          <Link activeclassName="active" to="about"  smooth={true}  duration={500}>
        About
        </Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link rose hand" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-expanded="false">
          <Link activeclassName="active" to="contact"  smooth={true}  duration={500}>
        Contact
        </Link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>

</div>
  )
}
