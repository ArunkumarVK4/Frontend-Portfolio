import React from 'react'

export default function Education() {
  return (
    <div>
      
      <div className="container" name="education">
        <div className="row">
          <h1 className='text-center fw-bold text-warning display-4 mt-5'>Education</h1>
          <div className="col">


          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Front End Developer
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body text-center">
      <strong>MERN-STACK-DEVELOPER</strong><br /> 
                     <p>Guvi Geek Network <br />
                     ( Feb - 2023 to june - 2023 )</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Bachelor of engineering
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body text-center">
       
        <strong>B.E Mechanical Engineering</strong><br />
                     Anna University <br />
                     ( 2015 - 2019 ) 

      </div>
    </div>
  </div>

{/* school */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour ">
      <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        School
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body text-center">
        <h4 className='fw-bold'>SSLC</h4>
        <strong>SRV Boys Higher Secondary School.</strong>
        <p>( 2013 - 2015 )</p>

      </div>
    </div>
  </div>
</div>





          </div>
        </div>
      </div>


    </div>
  )
}

 