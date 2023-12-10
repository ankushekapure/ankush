import React from 'react'
import './Bio.css'
import bioimg from '../../assets/Home.png'

function Bio() {
  return (
    <div className='bioContainer'>
      <div className="block-1">
        <img id='bioImg' src={bioimg} alt="Home" />
        <div className="wave-container">
          <div className="wave"></div>
        </div>
      </div>
      <div className="block-2">
        <h2>Hi, I'm <span id='obrac'>&lt;/</span><span id='name'>Ankush Ekapure</span><span id='cbrac'>/&gt;</span>,</h2>
        <h2> a front-end developer</h2>
        <p id='about'>I craft digital experiences through code, weaving creativity and functionality into pixels and lines of HTML, CSS, and JavaScript.</p>
      </div>
    </div>
  )
}

export default Bio