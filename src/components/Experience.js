import React from 'react'
import './Experience.css'
function Experience() {
  return (
    <div className='expContainer'>
      <div className='block1-exp'>
        <div className='heading waviy-exp'><h2><span style={{ "--i": 1 }}>E</span>
          <span style={{ "--i": 2 }}>X</span>
          <span style={{ "--i": 3 }}>P</span>
          <span style={{ "--i": 4 }}>E</span>
          <span style={{ "--i": 5 }}>R</span>
          <span style={{ "--i": 6 }}>I</span>
          <span style={{ "--i": 7 }}>E</span>
          <span style={{ "--i": 8 }}>N</span>
          <span style={{ "--i": 9 }}>C</span>
          <span style={{ "--i": 10 }}>E</span>
        </h2></div>
      </div>
      <div class="experience-card">
        <div class="ribbon">3+ years of experience</div>
        <div class="experience-title">Software Engineer</div>
        <div class="experience-details">
          <p><span class="details-label">Company:</span> Snovaspace Information Systems Pvt. Ltd.</p>
          <p><span class="details-label">Location:</span> Hyderabad, India</p>
          <p><span class="details-label">Duration:</span> Jul 2020 - Present</p>
        </div>
        <div class="skills">
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
        </div>
      </div>
    </div>
  )
}

export default Experience